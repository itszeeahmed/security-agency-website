'use client'

import { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Container, Engine } from 'tsparticles-engine'

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const [particlesReady, setParticlesReady] = useState(false)
  
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine)
    setParticlesReady(true)
  }

  return (
    <div className="relative bg-primary/80">
      {/* tsParticles Background */}
      <div className="particles-bg fixed inset-0 pointer-events-none">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: "#c8973a",
              },
              links: {
                color: {
                  value: "#c8973a",
                },
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
            },
            detectRetina: true,
          }}
          className="w-full h-full"
        />
      </div>
      
      {/* Page Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
}
