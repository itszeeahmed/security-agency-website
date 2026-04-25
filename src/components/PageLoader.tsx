'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PageLoaderProps {
  onComplete: () => void
}

const statusTexts = [
  "INITIALISING SYSTEMS...",
  "LOADING SECURITY PROTOCOLS...",
  "VERIFYING CREDENTIALS...",
  "SYSTEMS ONLINE."
]

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [statusIndex, setStatusIndex] = useState(0)
  const [showCurtain, setShowCurtain] = useState(false)

  useEffect(() => {
    // Check if loader was already shown in this session
    // Commented out for testing - uncomment to enable session-based loading
    // const loaderSeen = sessionStorage.getItem('loaderSeen')
    // if (loaderSeen) {
    //   onComplete()
    //   return
    // }

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 22) // 100% over ~2.2 seconds

    // Status text cycling
    const statusInterval = setInterval(() => {
      setStatusIndex(prev => (prev + 1) % statusTexts.length)
    }, 600)

    // Trigger curtain exit after 2.4 seconds
    const curtainTimeout = setTimeout(() => {
      setShowCurtain(true)
      sessionStorage.setItem('loaderSeen', 'true')
    }, 2400)

    // Complete after curtain animation
    const completeTimeout = setTimeout(() => {
      onComplete()
    }, 3200) // 2.4s + 0.8s curtain animation

    return () => {
      clearInterval(progressInterval)
      clearInterval(statusInterval)
      clearTimeout(curtainTimeout)
      clearTimeout(completeTimeout)
    }
  }, [onComplete])

  // Commented out for testing - uncomment to enable session-based loading
  // if (sessionStorage.getItem('loaderSeen')) {
  //   return null
  // }

  return (
    <AnimatePresence>
      {!showCurtain && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-primary overflow-hidden"
        >
          {/* Grid Background */}
          <div className="grid-bg" />
          
          {/* Corner Decorations */}
          <div className="corner-decoration top-left" />
          <div className="corner-decoration top-right" />
          <div className="corner-decoration bottom-left" />
          <div className="corner-decoration bottom-right" />
          
          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            {/* Logo */}
            <div className="mb-12 flex items-center space-x-4">
              {/* Hexagon SVG */}
              <svg width="60" height="60" viewBox="0 0 60 60" className="text-accent-gold">
                <path
                  d="M30 5 L50 17.5 L50 42.5 L30 55 L10 42.5 L10 17.5 Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span className="font-bebas text-4xl text-accent-gold tracking-wider">
                Vision Defence Security
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-64 h-0.5 bg-surface rounded-full overflow-hidden mb-6">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-gold to-accent-light"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
            
            {/* Status Text */}
            <div className="h-6 flex items-center justify-center">
              <motion.p
                key={statusIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="font-barlow-condensed text-xs tracking-widest text-accent-gold uppercase"
              >
                {statusTexts[statusIndex]}
              </motion.p>
            </div>
          </div>
          
          {/* Curtain Split Animation */}
          <AnimatePresence>
            {showCurtain && (
              <>
                <motion.div
                  className="absolute inset-x-0 top-0 h-1/2 bg-primary z-20"
                  initial={{ y: 0 }}
                  animate={{ y: "-100%" }}
                  exit={{ y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.76, 0, 0.24, 1] 
                  }}
                />
                <motion.div
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-primary z-20"
                  initial={{ y: 0 }}
                  animate={{ y: "100%" }}
                  exit={{ y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.76, 0, 0.24, 1] 
                  }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
