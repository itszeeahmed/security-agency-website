'use client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import BackToTop from '@/components/BackToTop'
import ContactForm from '@/components/ContactForm'
import { Shield, Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

// Page metadata handled in layout.tsx for client components

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['0800-123-4567', '020-456-7890'],
    description: '24/7 Emergency Hotline Available'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@visiondefence-security.co.uk', 'quotes@visiondefence-security.co.uk'],
    description: 'We respond within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Head Office',
    details: [
      'Vision Defence Security House',
      '123 Security Boulevard',
      'London, EC1A 1BB',
      'United Kingdom'
    ],
    description: 'Monday - Friday, 9AM - 6PM'
  }
]

const services = [
  'Static Security Guarding',
  'CCTV Monitoring',
  'Mobile Patrol Services',
  'Event Security',
  'Commercial Cleaning',
  'Key Holding Services'
]

export default function ContactPage() {

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-bebas text-5xl md:text-7xl text-gradient mb-6">
              Get In Touch
            </h1>
            <p className="font-barlow text-xl text-text-muted max-w-3xl mx-auto">
              Ready to secure your business? Contact our expert team today for a free consultation 
              and customized security solution tailored to your needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-accent-light rounded-lg flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bebas text-2xl text-text-primary mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="font-barlow text-text-muted">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="font-barlow text-accent-gold text-sm">
                    {info.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-accent-gold/10 to-accent-light/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-gradient mb-6">
              Request a Quote
            </h2>
            <p className="font-barlow text-xl text-text-muted">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <ScrollReveal className="text-center">
            <div className="bg-gradient-to-r from-accent-gold/20 to-accent-light/20 border border-accent-gold/50 rounded-lg p-8">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-accent-gold mr-3" />
                <h3 className="font-bebas text-3xl text-accent-gold">
                  Emergency Response
                </h3>
              </div>
              <p className="font-barlow text-text-muted mb-6">
                For immediate security assistance or emergency situations, 
                our 24/7 hotline is always available.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="tel:0800-123-4567" 
                  className="flex items-center px-6 py-3 bg-accent-gold text-primary font-barlow-condensed font-semibold rounded hover:bg-accent-light transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0800-123-4567
                </a>
                <div className="flex items-center text-accent-gold">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-barlow font-semibold">24/7 Available</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
