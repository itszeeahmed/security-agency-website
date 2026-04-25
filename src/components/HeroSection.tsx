'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Container, Engine } from 'tsparticles-engine'

export default function HeroSection() {
  const [particlesReady, setParticlesReady] = useState(false)
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine)
    setParticlesReady(true)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* tsParticles Background */}
      <div className="particles-bg">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: "#c8973a",
              },
              links: {
                color: {
                  value: "#c8973a",
                },
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* CSS Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <span className="font-barlow-condensed text-sm tracking-widest text-accent-gold uppercase">
            UK's Premier Security Provider
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-bebas text-5xl md:text-7xl lg:text-8xl text-gradient leading-tight mb-8"
        >
          Professional SECURITY &<br />
          Cleaning Services<br />
          Across the UK
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-barlow text-xl text-text-muted max-w-3xl mx-auto mb-12"
        >
          Protecting your business with elite security solutions and professional 
          cleaning services. Trusted by leading companies nationwide.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-light text-primary font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-accent-gold/25 transition-all duration-300">
            Get a Free Quote
          </button>
          <button className="px-8 py-4 border-2 border-accent-gold text-accent-gold font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-accent-gold hover:text-primary transition-all duration-300">
            Call Now
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-gold rounded-full" />
            <span className="font-barlow text-sm text-text-muted">Fully Vetted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-gold rounded-full" />
            <span className="font-barlow text-sm text-text-muted">24/7 Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-gold rounded-full" />
            <span className="font-barlow text-sm text-text-muted">Nationwide UK</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent-gold rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-accent-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
