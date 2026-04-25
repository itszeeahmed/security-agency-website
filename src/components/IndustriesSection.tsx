'use client'

import ScrollReveal from './ScrollReveal'
import { Building, Factory, ShoppingBag, Hotel, School } from 'lucide-react'

export default function IndustriesSection() {
  const industries = [
    {
      icon: Building,
      name: 'Corporate',
      description: 'Office buildings and business parks'
    },
    {
      icon: Factory,
      name: 'Industrial',
      description: 'Manufacturing and warehouse facilities'
    },
    {
      icon: ShoppingBag,
      name: 'Retail',
      description: 'Shopping centers and stores'
    },
    {
      icon: Hotel,
      name: 'Hospitality',
      description: 'Hotels and entertainment venues'
    },
    {
      icon: School,
      name: 'Education',
      description: 'Schools and educational institutions'
    }
  ]

  return (
    <section id="industries" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <h2 className="font-bebas text-4xl md:text-5xl text-gradient mb-6">
            Industries We Serve
          </h2>
          <p className="font-barlow text-text-muted max-w-2xl mx-auto">
            Specialized security and cleaning solutions tailored to your industry's unique requirements
          </p>
        </ScrollReveal>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="industry-card bg-primary border border-border rounded-lg p-6 text-center hover:shadow-lg hover:shadow-accent-gold/20 transition-all duration-300">
                <div className="industry-icon w-16 h-16 mx-auto mb-4 bg-surface rounded-full flex items-center justify-center">
                  <industry.icon className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="font-barlow-condensed text-lg font-semibold text-text-primary uppercase tracking-wider mb-2">
                  {industry.name}
                </h3>
                <p className="font-barlow text-text-muted text-xs">
                  {industry.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
