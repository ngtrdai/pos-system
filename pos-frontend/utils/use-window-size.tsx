'use client'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'
import { useEffect, useState } from 'react'

const config = resolveConfig(tailwindConfig)

const useWindowSize = () => {
  const isClient = typeof window === 'object'
  const mobileBreakpoint =
    Number((config.theme as any).screens.sm.replace('px', '')) || 0
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    let handleResize = () => {}

    if (isClient) {
      handleResize = () => {
        setIsMobile(window.innerWidth < mobileBreakpoint)
      }
      window.addEventListener('resize', handleResize)
      handleResize()
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isClient, mobileBreakpoint])

  return { isMobile }
}

export default useWindowSize
