'use client'
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import BackToTop from '@/components/BackToTop'
import { Shield, Users, Award, MapPin, Phone, Mail, Star, CheckCircle } from 'lucide-react'

const teamMembers = [
  {
    name: "James Mitchell",
    position: "Chief Executive Officer",
    image: "/api/placeholder/400/400",
    bio: "With over 20 years in security management, James leads our strategic vision and ensures operational excellence across all divisions.",
    experience: "20+ Years",
    specialties: ["Strategic Planning", "Risk Management", "Client Relations"],
    contact: "j.mitchell@visiondefence-security.co.uk"
  },
  {
    name: "Sarah Thompson",
    position: "Operations Director",
    image: "/api/placeholder/400/400",
    bio: "Sarah oversees all operational aspects of our security services, ensuring seamless delivery and highest standards of client satisfaction.",
    experience: "15+ Years",
    specialties: ["Operations Management", "Quality Control", "Team Leadership"],
    contact: "s.thompson@visiondefence-security.co.uk"
  },
  {
    name: "Michael Roberts",
    position: "Security Manager",
    image: "/api/placeholder/400/400",
    bio: "Michael manages our frontline security teams and ensures all protocols are followed with precision and professionalism.",
    experience: "12+ Years",
    specialties: ["Security Operations", "Team Training", "Emergency Response"],
    contact: "m.roberts@visiondefence-security.co.uk"
  },
  {
    name: "Emma Williams",
    position: "HR Director",
    image: "/api/placeholder/400/400",
    bio: "Emma leads our human resources department, ensuring we recruit and retain the best security professionals in the industry.",
    experience: "10+ Years",
    specialties: ["Talent Acquisition", "Training & Development", "Employee Relations"],
    contact: "e.williams@visiondefence-security.co.uk"
  },
  {
    name: "David Chen",
    position: "Technical Security Specialist",
    image: "/api/placeholder/400/400",
    bio: "David specializes in advanced security systems, CCTV, and technological solutions that enhance our service offerings.",
    experience: "8+ Years",
    specialties: ["CCTV Systems", "Access Control", "Security Technology"],
    contact: "d.chen@visiondefence-security.co.uk"
  },
  {
    name: "Lisa Anderson",
    position: "Client Relations Manager",
    image: "/api/placeholder/400/400",
    bio: "Lisa ensures our clients receive exceptional service and acts as the primary point of contact for all account management.",
    experience: "7+ Years",
    specialties: ["Client Management", "Service Coordination", "Account Development"],
    contact: "l.anderson@visiondefence-security.co.uk"
  }
]

const teamStats = [
  { number: "500+", label: "Security Professionals" },
  { number: "50+", label: "Management Team" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center mb-6">
              <Users className="w-12 h-12 text-accent-gold mr-4" />
              <h1 className="font-bebas text-5xl md:text-7xl text-gradient">
                Our Team
              </h1>
            </div>
            <p className="font-barlow text-xl text-text-muted max-w-3xl mx-auto">
              Meet the dedicated professionals who make Vision Defence Security the trusted name 
              in protection services across the UK.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-gradient-to-r from-accent-gold/10 to-accent-light/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="font-bebas text-4xl md:text-5xl text-accent-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="font-barlow text-text-muted">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-gradient mb-6">
              Leadership Team
            </h2>
            <p className="font-barlow text-xl text-text-muted max-w-3xl mx-auto">
              Our experienced leadership team brings decades of combined expertise in security management 
              and client service excellence.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-surface border border-border rounded-lg overflow-hidden hover:border-accent-gold/50 transition-all duration-300 group">
                  {/* Team Member Image */}
                  <div className="relative h-64 bg-gradient-to-br from-accent-gold/20 to-accent-light/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-accent-gold rounded-full flex items-center justify-center">
                        <Users className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Team Member Info */}
                  <div className="p-6">
                    <h3 className="font-bebas text-2xl text-text-primary mb-2">
                      {member.name}
                    </h3>
                    <div className="flex items-center mb-4">
                      <Shield className="w-4 h-4 text-accent-gold mr-2" />
                      <p className="font-barlow text-accent-gold font-semibold">
                        {member.position}
                      </p>
                    </div>
                    
                    <p className="font-barlow text-text-muted mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-accent-gold mr-2" />
                        <span className="font-barlow text-text-primary font-semibold">
                          Experience: {member.experience}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, specIndex) => (
                          <span 
                            key={specIndex}
                            className="px-3 py-1 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-xs font-barlow text-accent-gold"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center text-sm text-text-muted">
                        <Mail className="w-4 h-4 mr-2 text-accent-gold" />
                        <span className="truncate">{member.contact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gradient-to-r from-accent-gold/10 to-accent-light/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-bebas text-4xl md:text-5xl text-gradient mb-6">
              Join Our Team
            </h2>
            <p className="font-barlow text-xl text-text-muted mb-8">
              Are you a security professional looking to advance your career? 
              We're always seeking talented individuals to join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:careers@visiondefence-security.co.uk" 
                className="px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-light text-primary font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-accent-gold/25 transition-all duration-300"
              >
                Apply Now
              </a>
              <div className="flex items-center text-accent-gold">
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-barlow font-semibold">020-456-7890</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
