import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import { Shield, Users, Award, Clock, MapPin, CheckCircle, Target, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Vision Defence Security',
  description: 'Learn about Vision Defence Security - UK\'s premier security provider with 17+ years of experience, trusted by leading companies nationwide.',
}

const stats = [
  { number: '17+', label: 'Years Experience' },
  { number: '500+', label: 'Security Personnel' },
  { number: '1000+', label: 'Clients Served' },
  { number: '24/7', label: 'Support Available' }
]

const values = [
  {
    icon: Shield,
    title: 'Professional Excellence',
    description: 'We maintain the highest standards of professionalism in all our operations, ensuring our clients receive exceptional service.'
  },
  {
    icon: Eye,
    title: 'Vigilance',
    description: 'Our team remains alert and attentive at all times, providing comprehensive security coverage and proactive threat prevention.'
  },
  {
    icon: Target,
    title: 'Client-Focused',
    description: 'We tailor our security solutions to meet your specific needs, ensuring optimal protection and peace of mind.'
  },
  {
    icon: CheckCircle,
    title: 'Reliability',
    description: 'Count on us to be there when you need us most, with consistent, dependable security services you can trust.'
  }
]

const timeline = [
  {
    year: '2007',
    title: 'Company Founded',
    description: 'Vision Defence Security was established with a mission to provide premium security services across the UK.'
  },
  {
    year: '2012',
    title: 'Expansion Phase',
    description: 'Expanded operations to cover major UK cities and added commercial cleaning services to our portfolio.'
  },
  {
    year: '2017',
    title: 'Technology Integration',
    description: 'Implemented advanced CCTV monitoring systems and digital security solutions for enhanced protection.'
  },
  {
    year: '2024',
    title: 'Industry Leadership',
    description: 'Recognized as one of the UK\'s leading security providers, serving over 1000 clients nationwide.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-bebas text-5xl md:text-7xl text-gradient mb-6">
              About Vision Defence Security
            </h1>
            <p className="font-barlow text-xl text-text-muted max-w-3xl mx-auto">
              For over 17 years, we have been the trusted partner for businesses across the UK, 
              providing elite security solutions and professional cleaning services that protect 
              what matters most.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-accent-gold/10 to-accent-light/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Company Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-gradient mb-6">
              Our Story
            </h2>
            <p className="font-barlow text-lg text-text-muted leading-relaxed">
              Founded in 2007, Vision Defence Security began with a simple mission: to provide 
              exceptional security services that businesses could truly rely on. From our humble 
              beginnings as a small team of dedicated professionals, we have grown into one of 
              the UK\'s most trusted security providers.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-bebas text-3xl text-text-primary mb-4">
                  Our Mission
                </h3>
                <p className="font-barlow text-text-muted mb-6">
                  To deliver comprehensive security solutions that protect our clients\' assets, 
                  employees, and reputation through unmatched expertise, cutting-edge technology, 
                  and unwavering commitment to excellence.
                </p>
                
                <h3 className="font-bebas text-3xl text-text-primary mb-4">
                  Our Vision
                </h3>
                <p className="font-barlow text-text-muted">
                  To be the UK\'s leading security services provider, setting the industry standard 
                  for innovation, reliability, and customer satisfaction while maintaining the 
                  personal touch that our clients deserve.
                </p>
              </div>
              
              <div className="bg-surface border border-border rounded-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bebas text-xl text-text-primary mb-2">
                        Licensed & Insured
                      </h4>
                      <p className="font-barlow text-text-muted text-sm">
                        Fully licensed by the Security Industry Authority (SIA) and comprehensively insured.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bebas text-xl text-text-primary mb-2">
                        Expert Team
                      </h4>
                      <p className="font-barlow text-text-muted text-sm">
                        Our security professionals are highly trained, experienced, and background-checked.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Award className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bebas text-xl text-text-primary mb-2">
                        Award Winning
                      </h4>
                      <p className="font-barlow text-text-muted text-sm">
                        Recognized for excellence in security services and customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-accent-gold/10 to-accent-light/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-gradient mb-6">
              Our Core Values
            </h2>
            <p className="font-barlow text-xl text-text-muted">
              The principles that guide everything we do
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-accent-light rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bebas text-2xl text-text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="font-barlow text-text-muted">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-gradient mb-6">
              Our Journey
            </h2>
            <p className="font-barlow text-xl text-text-muted">
              Key milestones in our growth and development
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
                      <span className="font-bebas text-primary text-sm">
                        {event.year.slice(-2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bebas text-2xl text-text-primary mb-2">
                      {event.title}
                    </h3>
                    <p className="font-barlow text-text-muted">
                      {event.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-gold/10 to-accent-light/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-bebas text-4xl md:text-5xl text-gradient mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="font-barlow text-xl text-text-muted mb-8">
              Join the hundreds of businesses that trust Vision Defence Security for their 
              safety and security needs. Let us protect what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-light text-primary font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-accent-gold/25 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-accent-gold text-accent-gold font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-accent-gold hover:text-primary transition-all duration-300">
                Learn More
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
