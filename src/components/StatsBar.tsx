'use client'

import ScrollReveal from './ScrollReveal'
import CountUp from 'react-countup'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function StatsBar() {
  const [countersStarted, setCountersStarted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: 17, suffix: '+', label: 'Years Experience' },
    { number: 500, suffix: '+', label: 'Happy Clients' },
    { number: 2400, suffix: '+', label: 'Assignments' },
    { number: 98, suffix: '%', label: 'Satisfaction' }
  ]

  return (
    <section id="stats" ref={ref} className="py-16 bg-gradient-to-r from-accent-gold/10 to-accent-light/10 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center group">
                <div className="font-bebas text-4xl md:text-5xl text-gradient mb-2">
                  {isInView && (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2}
                      suffix={stat.suffix}
                      onStart={() => setCountersStarted(true)}
                    />
                  )}
                  {!isInView && (
                    <span>{stat.number}{stat.suffix}</span>
                  )}
                </div>
                <div className="relative">
                  <p className="font-barlow text-text-muted text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <div className="stat-underline" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
