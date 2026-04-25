'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Shield, Phone, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary/95 backdrop-blur-xs border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="w-8 h-8 text-accent-gold" />
              <div className="absolute -inset-1 bg-accent-gold opacity-20 rounded-lg blur-sm" />
            </div>
            <span className="font-bebas text-2xl text-accent-gold tracking-wider">
              Vision Defence Security
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-barlow text-text-primary hover:text-accent-gold transition-colors duration-300">
              Services
            </a>
            <a href="#why-us" className="font-barlow text-text-primary hover:text-accent-gold transition-colors duration-300">
              Why Us
            </a>
            <a href="#stats" className="font-barlow text-text-primary hover:text-accent-gold transition-colors duration-300">
              Stats
            </a>
            <a href="#industries" className="font-barlow text-text-primary hover:text-accent-gold transition-colors duration-300">
              Industries
            </a>
            <a href="#contact" className="font-barlow text-text-primary hover:text-accent-gold transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="cta-pulse px-6 py-3 bg-gradient-to-r from-accent-gold to-accent-light text-primary font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-accent-gold/25 transition-all duration-300">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text-primary hover:text-accent-gold transition-colors duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-primary border-t border-border py-6"
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="font-barlow text-text-primary hover:text-accent-gold transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#why-us" 
                className="font-barlow text-text-primary hover:text-accent-gold transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Us
              </a>
              <a 
                href="#stats" 
                className="font-barlow text-text-primary hover:text-accent-gold transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Stats
              </a>
              <a 
                href="#industries" 
                className="font-barlow text-text-primary hover:text-accent-gold transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </a>
              <a 
                href="#contact" 
                className="font-barlow text-text-primary hover:text-accent-gold transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button className="cta-pulse px-6 py-3 bg-gradient-to-r from-accent-gold to-accent-light text-primary font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-accent-gold/25 transition-all duration-300">
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
