'use client'

import ScrollReveal from './ScrollReveal'
import { Award, ShieldCheck, Clock, Users, Zap, Globe } from 'lucide-react'

export default function WhyUsSection() {
  const features = [
    {
      icon: Award,
      title: 'Industry Certified',
      description: 'Fully licensed and accredited by leading security industry bodies with ISO 9001 certification.'
    },
    {
      icon: ShieldCheck,
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage providing peace of mind for all our clients.'
    },
    {
      icon: Clock,
      title: '24/7 Response',
      description: 'Round-the-clock monitoring and rapid response teams available at all times.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly trained professionals with extensive military and security backgrounds.'
    },
    {
      icon: Zap,
      title: 'Quick Deployment',
      description: 'Rapid deployment capabilities with teams ready within 24 hours nationwide.'
    },
    {
      icon: Globe,
      title: 'Nationwide Coverage',
      description: 'Complete coverage across the UK with regional offices for local support.'
    }
  ]

  return (
    <section id="why-us" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <h2 className="font-bebas text-4xl md:text-5xl text-gradient mb-6">
            Why Choose LionHeart
          </h2>
          <p className="font-barlow text-text-muted max-w-2xl mx-auto">
            Setting the industry standard with unmatched expertise, reliability, and customer service
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="why-card bg-surface border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-accent-gold/10 transition-all duration-300 group">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-barlow-condensed text-lg font-semibold text-accent-gold uppercase tracking-wider mb-3">
                  {feature.title}
                </h3>
                <p className="font-barlow text-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
