'use client'

import { motion } from 'framer-motion'
import { X, Shield, Sparkles, Users, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Service {
  number: string
  icon: any
  title: string
  description: string
  features: string[]
  detailedDescription?: string
  benefits?: string[]
  process?: string[]
}

interface ServiceDetailModalProps {
  service: Service
  isOpen: boolean
  onClose: () => void
}

const serviceDetails: Record<string, Partial<Service>> = {
  'Security Services': {
    detailedDescription: 'Our comprehensive security services provide complete protection for your business, assets, and personnel. We combine cutting-edge technology with highly trained security professionals to deliver unmatched safety and peace of mind.',
    benefits: [
      'Enhanced safety and security for your premises',
      'Deterrence of criminal activities through visible presence',
      'Quick response to security incidents and emergencies',
      'Reduced insurance premiums through professional security',
      '24/7 monitoring and surveillance capabilities',
      'Customized security solutions for your specific needs'
    ],
    process: [
      'Initial security assessment and risk analysis',
      'Customized security plan development',
      'Professional security personnel deployment',
      'Advanced technology installation and monitoring',
      'Regular security audits and optimization',
      'Ongoing support and emergency response'
    ]
  },
  'Cleaning Services': {
    detailedDescription: 'Professional cleaning services that maintain the highest standards of hygiene and appearance for your commercial or industrial property. Our eco-friendly approach ensures a clean environment while protecting our planet.',
    benefits: [
      'Healthier work environment for employees and visitors',
      'Improved property appearance and professional image',
      'Extended lifespan of facilities and equipment',
      'Compliance with health and safety regulations',
      'Reduced sick days and increased productivity',
      'Customized cleaning schedules to minimize disruption'
    ],
    process: [
      'Site assessment and cleaning requirements analysis',
      'Customized cleaning plan and schedule creation',
      'Professional cleaning team deployment',
      'Quality control and inspection procedures',
      'Regular feedback and service optimization',
      'Emergency cleaning services available 24/7'
    ]
  },
  'Facility Management': {
    detailedDescription: 'Comprehensive facility management services that ensure your property operates at peak efficiency. From routine maintenance to emergency repairs, we handle all aspects of facility operations.',
    benefits: [
      'Reduced operational costs through proactive maintenance',
      'Extended equipment lifespan and reliability',
      'Compliance with building codes and regulations',
      'Single point of contact for all facility needs',
      'Improved tenant and employee satisfaction',
      '24/7 emergency response and support'
    ],
    process: [
      'Facility assessment and needs analysis',
      'Customized maintenance plan development',
      'Preventive maintenance schedule implementation',
      'Vendor management and coordination',
      'Regular inspections and performance monitoring',
      'Continuous optimization and reporting'
    ]
  },
  'Technical Support': {
    detailedDescription: 'Expert technical support and IT services designed to keep your business technology running smoothly. Our certified technicians provide fast, reliable solutions for all your technical challenges.',
    benefits: [
      'Minimized downtime and business disruptions',
      'Proactive system monitoring and maintenance',
      'Access to certified technical expertise',
      'Scalable solutions that grow with your business',
      'Enhanced data security and protection',
      'Cost-effective IT infrastructure management'
    ],
    process: [
      'Technical assessment and system audit',
      'Customized support plan development',
      'Proactive monitoring and maintenance implementation',
      'Help desk and remote support setup',
      'Regular performance reviews and optimization',
      'Emergency response protocols and procedures'
    ]
  }
}

export default function ServiceDetailModal({ service, isOpen, onClose }: ServiceDetailModalProps) {
  if (!isOpen) return null

  const details = serviceDetails[service.title] || {}

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-surface border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-8 border-b border-border">
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.3,
              rotate: { duration: 0.6, ease: "easeInOut" }
            }}
          >
            <X className="w-5 h-5" />
          </motion.button>

          <div className="flex items-start space-x-6">
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-accent-gold to-accent-light rounded-xl flex items-center justify-center flex-shrink-0">
              <service.icon className="w-10 h-10 text-primary" />
            </div>

            {/* Title and Description */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-6xl font-bebas text-accent-gold/20">
                  {service.number}
                </span>
                <h2 className="font-bebas text-4xl text-text-primary">
                  {service.title}
                </h2>
              </div>
              <p className="font-barlow text-text-muted text-lg leading-relaxed">
                {details.detailedDescription || service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Key Features */}
          <div>
            <h3 className="font-bebas text-2xl text-text-primary mb-6 flex items-center">
              <Star className="w-6 h-6 text-accent-gold mr-3" />
              Key Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0" />
                  <span className="font-barlow text-text-muted">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          {details.benefits && (
            <div>
              <h3 className="font-bebas text-2xl text-text-primary mb-6 flex items-center">
                <Shield className="w-6 h-6 text-accent-gold mr-3" />
                Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {details.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="font-barlow text-text-muted">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process */}
          {details.process && (
            <div>
              <h3 className="font-bebas text-2xl text-text-primary mb-6 flex items-center">
                <Clock className="w-6 h-6 text-accent-gold mr-3" />
                Our Process
              </h3>
              <div className="space-y-4">
                {details.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bebas text-accent-gold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-barlow text-text-muted">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-r from-accent-gold/10 to-accent-light/10 border border-accent-gold/20 rounded-lg p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="font-bebas text-lg sm:text-xl text-text-primary mb-2">
                  Ready to Get Started?
                </h4>
                <p className="font-barlow text-text-muted text-sm sm:text-base">
                  Contact us today for a free consultation and customized quote.
                </p>
              </div>
              <Link
                href="/contact"
                className="px-4 sm:px-6 py-3 bg-accent-gold text-primary font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-accent-gold/25 transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
                onClick={onClose}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
