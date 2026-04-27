'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const accreditationImages = [
  '/images/accreditation-1.jpg',
  '/images/accreditation-2.jpg',
  '/images/accreditation-3.jpg'
]

export default function AccreditationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [showCarousel, setShowCarousel] = useState(true)
  const [showPageContent, setShowPageContent] = useState(false)

  useEffect(() => {
    if (!isAutoPlay || !showCarousel) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === accreditationImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, showCarousel])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? accreditationImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === accreditationImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleOpenCarousel = () => {
    setShowCarousel(true)
    setIsAutoPlay(true)
  }

  const handleCloseCarousel = () => {
    setShowCarousel(false)
    setIsAutoPlay(false)
    setShowPageContent(true)
  }

  return (
    <>
      {/* Page Content - Only show when carousel is closed */}
      {showPageContent && (
        <>
          {/* Hero Section */}
          <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-[0.03]" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="font-bebas text-5xl md:text-7xl text-gradient mb-6">
                  Our Accreditations
                </h1>
                <p className="font-barlow text-xl text-text-muted max-w-3xl mx-auto mb-8">
                  Our commitment to excellence is demonstrated through our professional certifications 
                  and industry accreditations. View our credentials that showcase our expertise 
                  and dedication to providing top-tier security services.
                </p>
                <button
                  onClick={handleOpenCarousel}
                  className="px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-light text-primary font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-accent-gold/25 transition-all duration-300"
                >
                  View Accreditation Gallery
                </button>
              </motion.div>
            </div>
          </section>

          {/* Preview Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="font-bebas text-4xl md:text-5xl text-gradient mb-6">
                  Certification Highlights
                </h2>
                <p className="font-barlow text-xl text-text-muted max-w-3xl mx-auto">
                  Our team holds numerous certifications from leading security industry bodies, 
                  ensuring we meet the highest standards of professionalism and expertise.
                </p>
              </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {accreditationImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group cursor-pointer"
                onClick={handleOpenCarousel}
              >
                <div className="relative overflow-hidden rounded-lg border border-border hover:border-accent-gold transition-all duration-300">
                  <img
                    src={image}
                    alt={`Accreditation ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="font-barlow font-semibold">View Full Gallery</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bebas text-xl text-text-primary mb-2">
                    Certification {index + 1}
                  </h3>
                  <p className="font-barlow text-text-muted text-sm">
                    Industry-recognized accreditation demonstrating our expertise
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        </>
      )}

      {/* Carousel Modal */}
      <AnimatePresence>
        {showCarousel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
            onClick={handleCloseCarousel}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleCloseCarousel}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-surface transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 0.3,
                  rotate: { duration: 0.6, ease: "easeInOut" }
                }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Back Button */}
              <Link
                href="/"
                className="absolute top-4 left-4 z-10 w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-surface transition-all duration-300"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>

              {/* Carousel Container */}
              <div className="relative max-w-6xl w-full">
                {/* Main Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={accreditationImages[currentIndex]}
                      alt={`Accreditation ${currentIndex + 1}`}
                      className="w-full h-full object-contain bg-surface"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-surface transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-surface transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {accreditationImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-primary w-8'
                          : 'bg-surface/60 hover:bg-surface'
                      }`}
                    />
                  ))}
                </div>

                {/* Auto-play Toggle */}
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="absolute top-4 right-20 z-10 px-4 py-2 bg-surface/80 backdrop-blur-sm border border-border rounded-lg text-sm font-barlow hover:bg-primary hover:text-surface transition-all duration-300"
                >
                  {isAutoPlay ? 'Pause' : 'Play'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
