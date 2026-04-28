'use client'

import ScrollReveal from './ScrollReveal'
import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import CountryPhoneSelector from './CountryPhoneSelector'
import { validatePhoneNumber } from '@/utils/countryPhoneData'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneCountryCode: 'US',
    company: '',
    services: [] as string[],
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
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
        phone: ''
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
        services: ''
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {}

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

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!validatePhoneNumber(formData.phone, formData.phoneCountryCode)) {
      newErrors.phone = 'Please enter a valid phone number for the selected country'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrors({})

    // Submit to API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          honeypot: '' // Empty honeypot for legitimate submissions
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          phoneCountryCode: 'US',
          company: '',
          services: [],
          message: ''
        })
      } else {
        setSubmitStatus('error')
        setErrors({ general: data.message || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrors({ general: 'Network error. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="font-barlow text-text-muted max-w-2xl mx-auto">
            Ready to secure your business? Contact our expert team today for a free consultation and quote.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-primary border border-border rounded-lg p-6 sm:p-8">
              <h3 className="font-barlow-condensed text-2xl font-semibold text-accent-gold uppercase tracking-wider mb-8">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block font-barlow text-sm text-text-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                  
                  <div>
                    <label htmlFor="email" className="block font-barlow text-sm text-text-muted mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                  <div>
                    <label htmlFor="phone" className="block font-barlow text-sm text-text-muted mb-2">
                      Phone Number *
                    </label>
                    <CountryPhoneSelector
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      error={errors.phone}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block font-barlow text-sm text-text-muted mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
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

                <div>
                  <label htmlFor="message" className="block font-barlow text-sm text-text-muted mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="font-barlow text-green-400 text-sm">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="font-barlow text-red-400 text-sm">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-light text-primary font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-accent-gold/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="font-barlow-condensed text-2xl font-semibold text-accent-gold uppercase tracking-wider mb-8">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-barlow-condensed text-lg font-semibold text-text-primary uppercase tracking-wider mb-2">
                        24/7 Hotline
                      </h4>
                      <p className="font-barlow text-text-muted">
                        0800-123-4567<br />
                        020-7123-4567 (London)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-barlow-condensed text-lg font-semibold text-text-primary uppercase tracking-wider mb-2">
                        Email Addresses
                      </h4>
                      <p className="font-barlow text-text-muted">
                        info@visiondefence-security.co.uk<br />
                        quotes@visiondefence-security.co.uk<br />
                        support@visiondefence-security.co.uk
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-barlow-condensed text-lg font-semibold text-text-primary uppercase tracking-wider mb-2">
                        Headquarters
                      </h4>
                      <p className="font-barlow text-text-muted">
                        Vision Defence Security House<br />
                        123 Security Boulevard<br />
                        London, EC1A 1BB<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-primary border border-border rounded-lg p-6">
                <h4 className="font-barlow-condensed text-lg font-semibold text-accent-gold uppercase tracking-wider mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 font-barlow text-text-muted">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span>Emergency Hotline</span>
                    <span className="text-accent-gold">24/7 Available</span>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-r from-accent-gold/10 to-accent-light/10 border border-accent-gold/30 rounded-lg p-6">
                <h4 className="font-barlow-condensed text-lg font-semibold text-accent-gold uppercase tracking-wider mb-3">
                  Quick Response Guarantee
                </h4>
                <p className="font-barlow text-text-muted text-sm">
                  We guarantee a response within 2 hours during business hours and within 4 hours for after-hours inquiries. For emergency situations, call our 24/7 hotline immediately.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
