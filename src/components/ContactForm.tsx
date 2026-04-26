'use client'

import { useState } from 'react'
import CountryPhoneSelector from './CountryPhoneSelector'
import { validatePhoneNumber } from '@/utils/countryPhoneData'

interface FormData {
  name: string
  email: string
  phone: string
  phoneCountryCode: string
  company: string
  services: string[]
  message: string
  honeypot: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  company?: string
  services?: string
  message?: string
  general?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    phoneCountryCode: 'US',
    company: '',
    services: [],
    message: '',
    honeypot: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation (multiple country formats)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!validatePhoneNumber(formData.phone, formData.phoneCountryCode)) {
      newErrors.phone = 'Please enter a valid phone number for the selected country'
    }

    // Services validation (optional)
    // Services are optional, so no validation needed

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handlePhoneChange = (phone: string, countryCode: string) => {
    setFormData(prev => ({
      ...prev,
      phone,
      phoneCountryCode: countryCode
    }))
    
    // Clear phone error when user starts typing
    if (errors.phone) {
      setErrors(prev => ({
        ...prev,
        phone: undefined
      }))
    }
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }))
    
    // Clear service error when user selects a service
    if (errors.services && checked) {
      setErrors(prev => ({
        ...prev,
        services: undefined
      }))
    }
  }

  const validateField = (fieldName: keyof FormData, value: string): string | undefined => {
    switch (fieldName) {
      case 'name':
        if (!value.trim()) {
          return 'Full name is required'
        } else if (value.trim().length < 3) {
          return 'Name must be at least 3 characters'
        }
        break
        
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!value.trim()) {
          return 'Email address is required'
        } else if (!emailRegex.test(value.trim())) {
          return 'Please enter a valid email address'
        }
        break
        
      case 'phone':
        if (!value.trim()) {
          return 'Phone number is required'
        } else if (!validatePhoneNumber(value, formData.phoneCountryCode)) {
          return 'Please enter a valid phone number for the selected country'
        }
        break
        
      case 'services':
        // Services are optional
        break
        
      case 'message':
        if (!value.trim()) {
          return 'Message is required'
        } else if (value.trim().length < 10) {
          return 'Message must be at least 10 characters'
        }
        break
        
      default:
        break
    }
    
    return undefined
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const error = validateField(name as keyof FormData, value)
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check honeypot (spam prevention)
    if (formData.honeypot) {
      return // Silently fail for bots
    }

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          phoneCountryCode: 'US',
          company: '',
          services: [],
          message: '',
          honeypot: ''
        })
      } else {
        setErrors({ general: data.message || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      setErrors({ general: 'Network error. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-600 mb-6">Thank you for contacting Vision Defence Security. We'll get back to you within 24 hours.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-primary border border-border rounded-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field for spam prevention */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleInputChange}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />

      {errors.general && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{errors.general}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block font-barlow text-sm text-text-muted mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className={`w-full px-4 py-3 bg-surface border rounded-lg text-black placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-colors duration-300 ${
              errors.name ? 'border-red-500' : 'border-border'
            }`}
            placeholder="John Smith"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>
        
        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block font-barlow text-sm text-text-muted mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className={`w-full px-4 py-3 bg-surface border rounded-lg text-black placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-colors duration-300 ${
              errors.email ? 'border-red-500' : 'border-border'
            }`}
            placeholder="john@example.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block font-barlow text-sm text-text-muted mb-2">
            Phone Number *
          </label>
          <CountryPhoneSelector
            value={formData.phone}
            onChange={handlePhoneChange}
            onBlur={() => handleInputBlur({ target: { name: 'phone', value: formData.phone } } as React.FocusEvent<HTMLInputElement>)}
            error={errors.phone}
            disabled={isSubmitting}
          />
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block font-barlow text-sm text-text-muted mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className={`w-full px-4 py-3 bg-surface border rounded-lg text-black placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-colors duration-300 ${
              errors.company ? 'border-red-500' : 'border-border'
            }`}
            placeholder="Your Company Ltd"
            disabled={isSubmitting}
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-600">{errors.company}</p>
          )}
        </div>
      </div>

      {/* Service Interest */}
      <div>
        <label className="block font-barlow text-sm text-text-muted mb-3">
          Service Interest (Select all that apply)
        </label>
        <div className="space-y-2">
          {[
            { value: 'security', label: 'Security Services' },
            { value: 'cleaning', label: 'Cleaning Services' },
            { value: 'consultation', label: 'Free Consultation' }
          ].map((service) => (
            <label key={service.value} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name={service.value}
                value={service.value}
                checked={formData.services.includes(service.value)}
                onChange={(e) => handleServiceChange(service.value, e.target.checked)}
                disabled={isSubmitting}
                className="w-4 h-4 text-accent-gold bg-surface border-border rounded focus:ring-accent-gold focus:ring-2"
              />
              <span className="font-barlow text-sm text-text-primary">{service.label}</span>
            </label>
          ))}
        </div>
        {errors.services && (
          <p className="mt-2 text-sm text-red-600">{errors.services}</p>
        )}
      </div>
      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-barlow text-sm text-text-muted mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          rows={5}
          className={`w-full px-4 py-3 bg-surface border rounded-lg text-black placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-colors duration-300 resize-none ${
            errors.message ? 'border-red-500' : 'border-border'
          }`}
          placeholder="Tell us about your security and cleaning needs..."
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-accent-gold to-accent-light text-primary font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-accent-gold/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
    </form>
    </div>
  )
}
