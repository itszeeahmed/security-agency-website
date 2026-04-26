'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-gold to-accent-light text-primary rounded-full shadow-lg hover:shadow-xl hover:shadow-accent-gold/25 transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-gold to-accent-light opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </button>
    </motion.div>
  )
}
