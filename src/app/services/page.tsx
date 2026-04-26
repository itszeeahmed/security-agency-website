import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import BackToTop from '@/components/BackToTop'
import { Shield, Users, Camera, Clock, MapPin, Award, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Vision Defence Security',
  description: 'Professional security and cleaning services across the UK. Expert security guards, CCTV monitoring, mobile patrols, and commercial cleaning solutions.',
}

const services = [
  {
    icon: Shield,
    title: 'Static Security Guarding',
    description: 'Professional security personnel for your premises, ensuring safety and preventing unauthorized access.',
    features: [
      'Fully licensed and trained security guards',
      '24/7 monitoring and surveillance',
      'Access control management',
      'Emergency response protocols'
    ],
    price: 'From £25/hour'
  },
  {
    icon: Camera,
    title: 'CCTV Monitoring',
    description: 'Advanced CCTV systems with remote monitoring and real-time surveillance capabilities.',
    features: [
      'High-definition camera systems',
      '24/7 remote monitoring',
      'Motion detection alerts',
      'Video recording and storage'
    ],
    price: 'From £200/month'
  },
  {
    icon: Users,
    title: 'Mobile Patrol Services',
    description: 'Regular mobile patrols to secure large areas and multiple locations.',
    features: [
      'Random and scheduled patrols',
      'GPS tracked patrol vehicles',
      'Incident reporting system',
      'Rapid response deployment'
    ],
    price: 'From £35/hour'
  },
  {
    icon: Clock,
    title: 'Key Holding & Alarm Response',
    description: 'Secure key holding services with rapid alarm response and emergency access.',
    features: [
      'Secure key storage solutions',
      '24/7 alarm response',
      'Emergency building access',
      'Incident management'
    ],
    price: 'From £150/month'
  },
  {
    icon: MapPin,
    title: 'Event Security',
    description: 'Comprehensive security solutions for events, concerts, and public gatherings.',
    features: [
      'Crowd management',
      'VIP protection',
      'Access control points',
      'Emergency evacuation support'
    ],
    price: 'Custom quote'
  },
  {
    icon: Award,
    title: 'Commercial Cleaning',
    description: 'Professional cleaning services for offices, commercial spaces, and industrial facilities.',
    features: [
      'Daily/weekly cleaning schedules',
      'Deep cleaning services',
      'Waste management',
      'Specialized equipment'
    ],
    price: 'From £15/hour'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-bebas text-5xl md:text-7xl text-gradient mb-6">
              Our Professional Services
            </h1>
            <p className="font-barlow text-xl text-text-muted max-w-3xl mx-auto">
              Comprehensive security and cleaning solutions tailored to your specific needs. 
              Trusted by businesses across the UK for over 17 years.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="service-card bg-surface border border-border rounded-lg p-8 hover:shadow-lg hover:shadow-accent-gold/10 transition-all duration-300 group">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-accent-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bebas text-2xl text-text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="font-barlow text-text-muted mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                        <span className="font-barlow text-text-muted text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="border-t border-border pt-6">
                    <div className="flex items-center justify-between">
                      <span className="font-barlow-condensed text-accent-gold font-semibold">
                        {service.price}
                      </span>
                      <button className="px-4 py-2 bg-accent-gold text-primary font-barlow-condensed font-semibold text-sm rounded hover:bg-accent-light transition-colors duration-300">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-gold/10 to-accent-light/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-bebas text-4xl md:text-5xl text-gradient mb-6">
              Need a Custom Security Solution?
            </h2>
            <p className="font-barlow text-xl text-text-muted mb-8">
              Our team can create a tailored security plan that meets your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-light text-primary font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-accent-gold/25 transition-all duration-300">
                Get Custom Quote
              </button>
              <button className="px-8 py-4 border-2 border-accent-gold text-accent-gold font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-accent-gold hover:text-primary transition-all duration-300">
                Call Us Now
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
