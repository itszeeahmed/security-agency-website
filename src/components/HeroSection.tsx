'use client'

import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'

export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Image Carousel Background */}
      <ImageCarousel />
      
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

          </section>
  )
}
