'use client'

import ScrollReveal from './ScrollReveal'

export default function CtaBanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-accent-light/20" />
      
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-accent-gold/30 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-accent-gold/20 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-accent-gold/25 rounded-full" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-bebas text-4xl md:text-6xl text-gradient mb-8">
            Ready to Secure Your Business?
          </h2>
          <p className="font-barlow text-text-muted text-lg mb-12 max-w-2xl mx-auto">
            Get in touch with our expert team today for a free, no-obligation security consultation and quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-light text-primary font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-accent-gold/25 transition-all duration-300">
              Get a Free Quote
            </button>
            <button className="px-8 py-4 border-2 border-accent-gold text-accent-gold font-barlow-condensed font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-accent-gold hover:text-primary transition-all duration-300">
              Call 0800-123-4567
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
