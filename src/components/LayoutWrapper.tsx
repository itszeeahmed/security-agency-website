'use client'

import { ReactNode, useState } from 'react'
import PageLoader from './PageLoader'

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const [loaderComplete, setLoaderComplete] = useState(false)

  return (
    <>
      <PageLoader onComplete={() => setLoaderComplete(true)} />
      <div 
        className="transition-opacity duration-600 ease-out"
        style={{ opacity: loaderComplete ? 1 : 0 }}
      >
        {children}
      </div>
    </>
  )
}
