'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Phone, MapPin, Calendar, Award, Briefcase, Linkedin } from 'lucide-react'

interface TeamMember {
  name: string
  position: string
  image: string
  bio: string
  experience: string
  specialties: string[]
  contact: string
  linkedin?: string
}

interface TeamMemberModalProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

export default function TeamMemberModal({ member, isOpen, onClose }: TeamMemberModalProps) {
  if (!member) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-2 md:p-4 lg:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-primary border border-border rounded-2xl w-full max-w-5xl max-h-[98vh] sm:max-h-[95vh] md:max-h-[90vh] lg:max-h-[85vh] overflow-y-auto shadow-2xl mx-1 sm:mx-2 md:mx-4 lg:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 0.3, 
                rotate: { duration: 0.6, ease: "easeInOut" }
              }}
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Header Section */}
            <div className="relative h-32 sm:h-40 md:h-56 lg:h-72 bg-gradient-to-br from-accent-gold/20 to-accent-light/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-accent-gold shadow-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/api/placeholder/200/200'
                  }}
                />
              </div>
              <div className="absolute top-4 left-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-gold rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-2 sm:p-3 md:p-4 lg:p-6">
              {/* Basic Info */}
              <div className="text-center mb-3 sm:mb-4 md:mb-6">
                <h2 className="font-bebas text-xl sm:text-2xl md:text-3xl lg:text-4xl text-text-primary mb-2">
                  {member.name}
                </h2>
                <p className="font-barlow text-base sm:text-lg md:text-xl text-accent-gold font-semibold mb-3">
                  {member.position}
                </p>
                <p className="font-barlow text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-3 sm:mb-4 md:mb-6">
                {/* Experience */}
                <div className="bg-surface border border-border rounded-lg p-2 sm:p-3 md:p-4 lg:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-accent-gold mr-2 sm:mr-3" />
                    <h3 className="font-bebas text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-primary">Experience</h3>
                  </div>
                  <p className="font-barlow text-xl sm:text-2xl md:text-3xl lg:text-4xl text-accent-gold font-bold mb-2">
                    {member.experience}
                  </p>
                  <p className="font-barlow text-xs sm:text-sm md:text-base lg:text-lg text-text-muted leading-relaxed">
                    Professional experience in security and technology sector
                  </p>
                </div>

                {/* Contact */}
                <div className="bg-surface border border-border rounded-lg p-2 sm:p-3 md:p-4 lg:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-accent-gold mr-2 sm:mr-3" />
                    <h3 className="font-bebas text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-primary">Contact</h3>
                  </div>
                  <div className="space-y-2 sm:space-y-3 break-words">
                    <a 
                      href={`mailto:${member.contact}`}
                      className="flex items-start text-text-muted hover:text-accent-gold transition-colors duration-300 group"
                    >
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm md:text-base break-all leading-tight flex-1 min-w-0">{member.contact}</span>
                    </a>
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-text-muted hover:text-accent-gold transition-all duration-300 group"
                      >
                        <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-accent-gold rounded-lg flex items-center justify-center mr-2 sm:mr-3 md:mr-4 group-hover:bg-accent-light transition-colors duration-300">
                          <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-barlow text-xs sm:text-sm md:text-lg font-semibold">LinkedIn</span>
                          <span className="font-barlow text-xs sm:text-sm md:text-base text-text-muted">View Profile</span>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="bg-surface border border-border rounded-lg p-2 sm:p-3 md:p-4 lg:p-6">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-accent-gold mr-2 sm:mr-3" />
                  <h3 className="font-bebas text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-primary">Specialties</h3>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {member.specialties.map((specialty, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 p-2 sm:p-3 bg-primary border border-border rounded-lg"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-accent-gold rounded-full" />
                      <span className="font-barlow text-xs sm:text-sm md:text-base text-text-muted">
                        {specialty}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(member.contact)}&su=Inquiry from Vision Defence Security Website`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-accent-gold text-primary font-barlow-condensed text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-lg hover:bg-accent-light transition-colors duration-300 text-center"
                >
                  Send Email
                </a>
                <button
                  onClick={onClose}
                  className="flex-1 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 border border-border text-text-primary font-barlow-condensed text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-lg hover:bg-accent-gold hover:text-primary transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
