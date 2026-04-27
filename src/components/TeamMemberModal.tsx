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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-primary border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
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
            <div className="relative h-64 bg-gradient-to-br from-accent-gold/20 to-accent-light/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-accent-gold shadow-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/api/placeholder/200/200'
                  }}
                />
              </div>
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Basic Info */}
              <div className="text-center mb-8">
                <h2 className="font-bebas text-4xl text-text-primary mb-2">
                  {member.name}
                </h2>
                <p className="font-barlow text-xl text-accent-gold font-semibold mb-4">
                  {member.position}
                </p>
                <p className="font-barlow text-text-muted max-w-2xl mx-auto">
                  {member.bio}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Experience */}
                <div className="bg-surface border border-border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-accent-gold mr-3" />
                    <h3 className="font-bebas text-2xl text-text-primary">Experience</h3>
                  </div>
                  <p className="font-barlow text-3xl text-accent-gold font-bold mb-2">
                    {member.experience}
                  </p>
                  <p className="font-barlow text-text-muted">
                    Professional experience in security and technology sector
                  </p>
                </div>

                {/* Contact */}
                <div className="bg-surface border border-border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-accent-gold mr-3" />
                    <h3 className="font-bebas text-2xl text-text-primary">Contact</h3>
                  </div>
                  <div className="space-y-3">
                    <a 
                      href={`mailto:${member.contact}`}
                      className="flex items-center text-text-muted hover:text-accent-gold transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {member.contact}
                    </a>
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-text-muted hover:text-accent-gold transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-accent-gold rounded-lg flex items-center justify-center mr-3 group-hover:bg-accent-light transition-colors duration-300">
                          <Linkedin className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-barlow text-sm font-semibold">LinkedIn</span>
                          <span className="font-barlow text-xs text-text-muted">View Profile</span>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="bg-surface border border-border rounded-lg p-6">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-6 h-6 text-accent-gold mr-3" />
                  <h3 className="font-bebas text-2xl text-text-primary">Specialties</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {member.specialties.map((specialty, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-primary border border-border rounded-lg"
                    >
                      <div className="w-2 h-2 bg-accent-gold rounded-full" />
                      <span className="font-barlow text-text-muted">
                        {specialty}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(member.contact)}&su=Inquiry from Vision Defence Security Website`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-accent-gold text-primary font-barlow-condensed font-semibold rounded-lg hover:bg-accent-light transition-colors duration-300 text-center"
                >
                  Send Email
                </a>
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-border text-text-primary font-barlow-condensed font-semibold rounded-lg hover:bg-accent-gold hover:text-primary transition-all duration-300"
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
