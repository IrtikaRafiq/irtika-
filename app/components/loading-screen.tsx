"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function LoadingScreen() {
  const loadingRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Progress bar animation
    tl.to(progressRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.inOut",
    })

    // Text fade in/out
    tl.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.5)

    // Loading screen exit
    tl.to(loadingRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.5,
    })

    tl.set(loadingRef.current, { display: "none" })

    return () => tl.kill()
  }, [])

  return (
    <div ref={loadingRef} className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div ref={textRef} className="mb-8">
          <h1 className="text-2xl md:text-3xl font-light text-white tracking-wider">LUXE</h1>
          <p className="text-sm text-gray-400 mt-2 tracking-widest">PREMIUM COLLECTION</p>
        </div>

        <div className="w-64 h-px bg-gray-800 relative overflow-hidden">
          <div ref={progressRef} className="absolute left-0 top-0 h-full bg-white w-0" />
        </div>
      </div>
    </div>
  )
}
