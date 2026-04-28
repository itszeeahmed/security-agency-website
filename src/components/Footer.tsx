'use client'

import ScrollReveal from './ScrollReveal'
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-border py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand Column */}
          <ScrollReveal>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-accent-gold" />
                <span className="font-bebas text-2xl text-accent-gold tracking-wider">
                  Vision Defence Security
                </span>
              </div>
              <p className="font-barlow text-text-muted text-sm">
                Professional security and cleaning services across the UK. Trusted by leading companies for over 17 years.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-accent-gold hover:bg-accent-gold hover:text-primary transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-accent-gold hover:bg-accent-gold hover:text-primary transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-accent-gold hover:bg-accent-gold hover:text-primary transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-accent-gold hover:bg-accent-gold hover:text-primary transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <h4 className="font-barlow-condensed text-lg font-semibold text-accent-gold uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="font-barlow text-text-muted hover:text-accent-gold transition-colors duration-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="font-barlow text-text-muted hover:text-accent-gold transition-colors duration-300">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#industries" className="font-barlow text-text-muted hover:text-accent-gold transition-colors duration-300">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="#contact" className="font-barlow text-text-muted hover:text-accent-gold transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <h4 className="font-barlow-condensed text-lg font-semibold text-accent-gold uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-barlow text-text-muted hover:text-accent-gold transition-colors duration-300">
                    Security Services
                  </a>
                </li>
                <li>
                  <a href="#" className="font-barlow text-text-muted hover:text-accent-gold transition-colors duration-300">
                    Cleaning Services
                  </a>
                </li>
                <li>
                  <a href="#" className="font-barlow text-text-muted hover:text-accent-gold transition-colors duration-300">
                    CCTV Monitoring
                  </a>
                </li>
                <li>
                  <a href="#" className="font-barlow text-text-muted hover:text-accent-gold transition-colors duration-300">
                    Emergency Response
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.3}>
            <div className="space-y-4">
              <h4 className="font-barlow-condensed text-lg font-semibold text-accent-gold uppercase tracking-wider">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent-gold" />
                  <span className="font-barlow text-text-muted text-sm">
                    0800-123-4567
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent-gold" />
                  <span className="font-barlow text-text-muted text-sm">
                    info@visiondefence-security.co.uk
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent-gold" />
                  <span className="font-barlow text-text-muted text-sm">
                    London, UK
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <ScrollReveal>
              <p className="font-barlow text-text-muted text-sm">
                © 2024 Vision Defence Security. All rights reserved.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex space-x-6">
                <a href="#" className="font-barlow text-text-muted text-sm hover:text-accent-gold transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="font-barlow text-text-muted text-sm hover:text-accent-gold transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="font-barlow text-text-muted text-sm hover:text-accent-gold transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </footer>
  )
}
