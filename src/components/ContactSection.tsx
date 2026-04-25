'use client'

import ScrollReveal from './ScrollReveal'
import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <h2 className="font-bebas text-4xl md:text-5xl text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="font-barlow text-text-muted max-w-2xl mx-auto">
            Ready to secure your business? Contact our expert team today for a free consultation and quote.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-primary border border-border rounded-lg p-8">
              <h3 className="font-barlow-condensed text-2xl font-semibold text-accent-gold uppercase tracking-wider mb-8">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-gold transition-colors duration-300"
                      placeholder="John Smith"
                    />
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
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-gold transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-barlow text-sm text-text-muted mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-gold transition-colors duration-300"
                      placeholder="+44 20 1234 5678"
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
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-gold transition-colors duration-300"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block font-barlow text-sm text-text-muted mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent-gold transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="security">Security Services</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="both">Both Security & Cleaning</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
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
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-gold transition-colors duration-300 resize-none"
                    placeholder="Tell us about your security and cleaning needs..."
                  />
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
                        info@lionheart-security.co.uk<br />
                        quotes@lionheart-security.co.uk<br />
                        support@lionheart-security.co.uk
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
                        LionHeart House<br />
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
