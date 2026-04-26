import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyUsSection from '@/components/WhyUsSection'
import StatsBar from '@/components/StatsBar'
import IndustriesSection from '@/components/IndustriesSection'
import CtaBanner from '@/components/CtaBanner'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <StatsBar />
        <IndustriesSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
