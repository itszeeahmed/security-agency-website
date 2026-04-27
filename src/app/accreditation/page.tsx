import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import AccreditationCarousel from '@/components/AccreditationCarousel'

export const metadata: Metadata = {
  title: 'Accreditation | Vision Defence Security',
  description: 'View our professional accreditations and certifications that demonstrate our commitment to excellence in security services.',
}

export default function AccreditationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AccreditationCarousel />
      <Footer />
      <BackToTop />
    </div>
  )
}
