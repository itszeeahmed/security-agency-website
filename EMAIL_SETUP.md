# Email Configuration Setup Guide

This guide will help you configure the contact form email functionality for Vision Defence Security website.

## 🚀 Quick Setup

### 1. Create Environment Variables

Copy the example environment file:
```bash
cp .env.example .env.local
```

### 2. Configure Gmail SMTP

For Gmail, you'll need to enable "Less secure app access" or use an App Password:

#### Option A: App Password (Recommended)
1. Go to [Google Account settings](https://myaccount.google.com/)
2. Enable 2-Step Authentication if not already enabled
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this app password in your `.env.local` file

#### Option B: Less Secure Apps
1. Go to [Google Account settings](https://myaccount.google.com/)
2. Go to Security → Less secure app access
3. Turn on "Allow less secure apps"

### 3. Update .env.local

```env
# Gmail Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password-or-password

# Where to send form submissions
CONTACT_EMAIL=info@visiondefence-security.co.uk
```

## 📧 Alternative Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Custom Domain Email
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=contact@yourdomain.com
SMTP_PASS=your-password
```

## 🔧 Testing the Configuration

### Test Email Sending
1. Start the development server:
```bash
npm run dev
```

2. Navigate to the Contact page
3. Fill out the form with test data
4. Submit the form

### Check Email Delivery
- Check your spam/junk folder
- Verify the email contains all form fields
- Ensure the HTML formatting is correct

## 🛡️ Security Features

### Spam Prevention
- **Honeypot Field**: Hidden field that catches bots
- **Server-side Validation**: All inputs validated on backend
- **Input Sanitization**: HTML tags and special characters escaped

### Rate Limiting
- Basic rate limiting implemented
- IP address tracking for submissions
- Prevents multiple rapid submissions

### Data Protection
- No sensitive data logged
- Secure SMTP connection
- Environment variables protected

## 📋 Email Template Features

The sent emails include:
- **Professional HTML Design**: Clean, branded layout
- **Complete Information**: All form fields displayed
- **Clickable Links**: Email and phone numbers are clickable
- **Timestamp**: Submission date and time
- **IP Address**: For security tracking
- **Reply-to Functionality**: Easy response to inquiries

## 🚨 Troubleshooting

### Common Issues

#### "Email service configuration error"
- Check SMTP credentials in `.env.local`
- Verify email and password are correct
- Ensure SMTP host and port are correct

#### "Failed to send email"
- Check internet connection
- Verify email provider allows SMTP access
- Check if app password is required (Gmail)

#### No email received
- Check spam/junk folder
- Verify CONTACT_EMAIL is correct
- Check email provider's sending limits

### Debug Mode
To enable debug logging, temporarily add this to the API route:
```typescript
console.log('SMTP Config:', {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS ? '***' : 'MISSING'
})
```

## 🔄 Production Deployment

### Vercel Environment Variables
1. Go to Vercel dashboard → Project → Settings
2. Add all SMTP environment variables
3. Ensure they're marked as "sensitive"
4. Redeploy the application

### Security Best Practices
- Never commit `.env.local` to version control
- Use app passwords instead of main passwords
- Regularly rotate email credentials
- Monitor email delivery rates

## 📊 Email Analytics

Consider adding:
- Email open tracking
- Click tracking for links
- Response time monitoring
- Conversion tracking

## 🎯 Next Steps

1. **Configure your SMTP settings** in `.env.local`
2. **Test the contact form** with real submissions
3. **Set up email forwarding** if needed
4. **Monitor email delivery** and spam rates
5. **Consider email analytics** for business insights

## 📞 Support

If you encounter issues:
1. Check this troubleshooting guide
2. Verify all environment variables are set
3. Test with different email providers
4. Check email provider's SMTP documentation

---

**Note**: The contact form will work without email configuration, but submissions won't be sent. Always test thoroughly before deploying to production.
