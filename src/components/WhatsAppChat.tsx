'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Pakistan phone number in international format (example)
  const phoneNumber = "923001234567"
  const preFilledMessage = "Hi, I visited your website and need security services. Please guide me."
  const encodedMessage = encodeURIComponent(preFilledMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleStartChat = () => {
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    // Close modal after clicking
    setIsOpen(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-24 right-8 z-[60] flex flex-col items-end"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap"
        >
          Chat with us instantly
        </motion.div>

        {/* WhatsApp Button */}
        <motion.button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 group"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* WhatsApp Icon */}
          <MessageCircle className="w-6 h-6 relative z-10" />
          
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[70] flex items-end justify-center p-4 md:items-center md:justify-end md:pr-8"
            onClick={handleClose}
          >
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.8 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                mass: 0.8
              }}
              className="bg-gray-900 rounded-t-2xl md:rounded-2xl w-full max-w-sm shadow-2xl border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Vision Defence Security</h3>
                    <p className="text-gray-400 text-xs">Typically replies instantly</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4">
                <div className="bg-gray-800 rounded-lg p-3 mb-4">
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Hi! How can we assist you with your security needs?
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleStartChat}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/25"
                  >
                    <Send className="w-4 h-4" />
                    Start Chat on WhatsApp
                  </button>
                  
                  <button
                    onClick={handleClose}
                    className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    Maybe later
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-gray-500 text-xs">
                    Powered by WhatsApp • Secure & Private
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
