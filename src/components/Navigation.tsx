'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Phone, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname === href || pathname.startsWith(href + '/')
  }

  const getActiveClassName = (href: string) => {
    const baseClasses = "nav-button px-4 py-2 font-barlow border rounded transition-all duration-300"
    const activeClasses = "bg-accent-gold text-primary border-accent-gold"
    const inactiveClasses = "text-text-primary hover:bg-accent-gold hover:text-primary border-transparent hover:border-accent-gold"
    
    return `${baseClasses} ${isActive(href) ? activeClasses : inactiveClasses}`
  }

  const getMobileActiveClassName = (href: string) => {
    const baseClasses = "nav-button px-4 py-3 font-barlow rounded transition-all duration-300 text-center"
    const activeClasses = "bg-accent-gold text-primary border-accent-gold"
    const inactiveClasses = "text-text-primary hover:bg-accent-gold hover:text-primary border border-transparent hover:border-accent-gold"
    
    return `${baseClasses} ${isActive(href) ? activeClasses : inactiveClasses}`
  }

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navContent = (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
            <div className="relative">
              <Shield className="w-8 h-8 text-accent-gold" />
              <div className="absolute -inset-1 bg-accent-gold opacity-20 rounded-lg blur-sm" />
            </div>
            <span className="font-bebas text-2xl text-accent-gold tracking-wider">
              Vision Defence Security
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              href="/" 
              className={getActiveClassName('/')}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={getActiveClassName('/services')}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={getActiveClassName('/about')}
            >
              About Us
            </Link>
            <Link 
              href="/team" 
              className={getActiveClassName('/team')}
            >
              Our Team
            </Link>
            <Link 
              href="/accreditation" 
              className={getActiveClassName('/accreditation')}
            >
              Accreditation
            </Link>
            <Link 
              href="/#industries" 
              className={getActiveClassName('/#industries')}
            >
              Industries
            </Link>
            <Link 
              href="/contact" 
              className={getActiveClassName('/contact')}
            >
              Contact
            </Link>
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
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className={getMobileActiveClassName('/')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={getMobileActiveClassName('/services')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className={getMobileActiveClassName('/about')}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/team" 
                className={getMobileActiveClassName('/team')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link 
                href="/accreditation" 
                className={getMobileActiveClassName('/accreditation')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Accreditation
              </Link>
              <Link 
                href="/#industries" 
                className={getMobileActiveClassName('/#industries')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link 
                href="/contact" 
                className={getMobileActiveClassName('/contact')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </>
  )

  return (
    <>
      {mounted ? (
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
          {navContent}
        </motion.nav>
      ) : (
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}
        >
          {navContent}
        </nav>
      )}
    </>
  )
}
