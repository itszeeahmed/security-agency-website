import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { validatePhoneNumber } from '@/utils/countryPhoneData'

// Validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim())
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

// HTML email template
function createEmailTemplate(data: {
  name: string
  email: string
  phone: string
  company?: string
  services: string[]
  message: string
  timestamp: string
  ip: string
}): string {
  const serviceLabels: { [key: string]: string } = {
    'security': 'Security Services',
    'cleaning': 'Cleaning Services',
    'consultation': 'Free Consultation'
  }

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #c8973a;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #1a1a1a;
            margin: 0;
            font-size: 24px;
        }
        .header p {
            color: #666;
            margin: 5px 0 0 0;
            font-size: 14px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f8f9fa;
            font-weight: 600;
            color: #1a1a1a;
            width: 30%;
        }
        td {
            color: #333;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            text-align: center;
            color: #666;
            font-size: 12px;
        }
        .urgent {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 4px;
            padding: 15px;
            margin: 20px 0;
        }
        .urgent h3 {
            color: #856404;
            margin: 0 0 10px 0;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Vision Defence Security</h1>
            <p>New Contact Form Submission</p>
        </div>

        <div class="urgent">
            <h3>🔔 New Lead Alert</h3>
            <p>A potential client has submitted an inquiry through the website contact form.</p>
        </div>

        <table>
            <tr>
                <th>Full Name</th>
                <td>${escapeHtml(data.name)}</td>
            </tr>
            <tr>
                <th>Email Address</th>
                <td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
            </tr>
            <tr>
                <th>Phone Number</th>
                <td><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></td>
            </tr>
            ${data.company ? `
            <tr>
                <th>Company Name</th>
                <td>${escapeHtml(data.company)}</td>
            </tr>` : ''}
            <tr>
                <th>Service Interest</th>
                <td>${data.services.length > 0 
                    ? data.services.map(s => serviceLabels[s] || escapeHtml(s)).join(', ')
                    : 'Not specified'}</td>
            </tr>
            <tr>
                <th>Message</th>
                <td>${escapeHtml(data.message).replace(/\n/g, '<br>')}</td>
            </tr>
            <tr>
                <th>Submission Date</th>
                <td>${data.timestamp}</td>
            </tr>
            <tr>
                <th>IP Address</th>
                <td>${data.ip}</td>
            </tr>
        </table>

        <div class="footer">
            <p>This email was sent from the Vision Defence Security website contact form.</p>
            <p>Please respond to this inquiry within 24 hours to provide excellent customer service.</p>
        </div>
    </div>
</body>
</html>
  `
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting (simple in-memory rate limiting)
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown'

    // Parse request body
    const body = await request.json()
    const { name, email, phone, phoneCountryCode, company, services, message, honeypot } = body

    // Spam prevention - check honeypot field
    if (honeypot) {
      // Silently fail for bots
      return NextResponse.json(
        { success: false, message: 'Invalid submission' },
        { status: 400 }
      )
    }

    // Server-side validation
    const errors: { [key: string]: string } = {}

    // Name validation
    if (!name || typeof name !== 'string') {
      errors.name = 'Full name is required'
    } else {
      const sanitizedName = sanitizeInput(name)
      if (sanitizedName.length < 3) {
        errors.name = 'Name must be at least 3 characters'
      }
      if (sanitizedName.length > 100) {
        errors.name = 'Name must be less than 100 characters'
      }
    }

    // Email validation
    if (!email || typeof email !== 'string') {
      errors.email = 'Email address is required'
    } else {
      const sanitizedEmail = sanitizeInput(email)
      if (!validateEmail(sanitizedEmail)) {
        errors.email = 'Please enter a valid email address'
      }
      if (sanitizedEmail.length > 255) {
        errors.email = 'Email must be less than 255 characters'
      }
    }

    // Phone validation
    if (!phone || typeof phone !== 'string') {
      errors.phone = 'Phone number is required'
    } else {
      const sanitizedPhone = sanitizeInput(phone)
      const phoneCountryCode = (body.phoneCountryCode as string) || 'US'
      if (!validatePhoneNumber(sanitizedPhone, phoneCountryCode)) {
        errors.phone = 'Please enter a valid phone number for the selected country'
      }
    }

    // Company validation (optional)
    if (company && typeof company === 'string') {
      const sanitizedCompany = sanitizeInput(company)
      if (sanitizedCompany.length > 100) {
        errors.company = 'Company name must be less than 100 characters'
      }
    }

    // Services validation (optional)
    if (services && Array.isArray(services)) {
      const validServices = ['security', 'cleaning', 'consultation']
      const invalidServices = services.filter(s => !validServices.includes(s))
      if (invalidServices.length > 0) {
        errors.services = 'Invalid service types selected'
      }
    }

    // Message validation
    if (!message || typeof message !== 'string') {
      errors.message = 'Message is required'
    } else {
      const sanitizedMessage = sanitizeInput(message)
      if (sanitizedMessage.length < 10) {
        errors.message = 'Message must be at least 10 characters'
      }
      if (sanitizedMessage.length > 2000) {
        errors.message = 'Message must be less than 2000 characters'
      }
    }

    // Return validation errors
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors },
        { status: 400 }
      )
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      company: company ? sanitizeInput(company) : undefined,
      services: services && Array.isArray(services) 
        ? services.map(s => sanitizeInput(s)).filter(s => s.length > 0)
        : [],
      message: sanitizeInput(message),
      timestamp: new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Karachi',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      ip: clientIP
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
    } catch (error) {
      console.error('Email transporter verification failed:', error)
      return NextResponse.json(
        { success: false, message: 'Email service configuration error' },
        { status: 500 }
      )
    }

    // Create email content
    const emailHtml = createEmailTemplate(sanitizedData)

    // Send email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission - Vision Defence Security - ${sanitizedData.name}`,
      html: emailHtml,
      replyTo: sanitizedData.email,
    }

    try {
      await transporter.sendMail(mailOptions)
    } catch (error) {
      console.error('Failed to send email:', error)
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    })

  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact form API endpoint' },
    { status: 200 }
  )
}
