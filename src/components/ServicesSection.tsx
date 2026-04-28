'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import ServiceDetailModal from './ServiceDetailModal'
import { Shield, Sparkles, Users, Clock, Building, Wrench } from 'lucide-react'

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleServiceClick = (service: any) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  const services = [
    {
      number: '01',
      icon: Shield,
      title: 'Security Services',
      description: 'Comprehensive security solutions including manned guarding, CCTV surveillance, and alarm response systems.',
      features: ['24/7 Monitoring', 'Licensed Personnel', 'Advanced Technology']
    },
    {
      number: '02',
      icon: Sparkles,
      title: 'Cleaning Services',
      description: 'Professional cleaning and maintenance services for commercial and industrial properties.',
      features: ['Deep Cleaning', 'Scheduled Maintenance', 'Eco-Friendly Products']
    },
    {
      number: '03',
      icon: Building,
      title: 'Facility Management',
      description: 'Complete facility management solutions including maintenance, repairs, and operational support.',
      features: ['Preventive Maintenance', 'Emergency Repairs', 'Vendor Management']
    },
    {
      number: '04',
      icon: Wrench,
      title: 'Technical Support',
      description: 'Expert technical support and IT services to keep your business operations running smoothly.',
      features: ['IT Support', 'Network Security', 'System Maintenance']
    }
  ]

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-gradient mb-6">
            Our Services
          </h2>
          <p className="font-barlow text-text-muted max-w-2xl mx-auto">
            Professional security and cleaning services tailored to meet the unique needs of your business
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div 
                className="service-card bg-primary border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg hover:shadow-accent-gold/10 transition-all duration-300 group cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                {/* Ghost Number */}
                <div className="text-8xl font-bebas text-accent-gold/10 mb-6 group-hover:text-accent-gold/20 transition-colors duration-300">
                  {service.number}
                </div>

                {/* Service Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-accent-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bebas text-2xl text-text-primary mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-barlow text-text-muted mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-accent-gold rounded-full" />
                        <span className="font-barlow text-sm text-text-muted">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="mt-8 font-barlow-condensed text-sm tracking-widest text-accent-gold uppercase hover:text-accent-light transition-colors duration-300">
                    Click for Details →
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  )
}
