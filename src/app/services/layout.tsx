import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Vision Defence Security',
  description: 'Professional security and cleaning services across the UK. Expert security guards, CCTV monitoring, mobile patrols, and commercial cleaning solutions.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
