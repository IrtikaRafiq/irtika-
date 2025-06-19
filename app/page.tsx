"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import LoadingScreen from "./components/loading-screen"
import Hero from "./components/hero"
import BestSelling from "./components/best-selling"
import Features from "./components/features"
import Footer from "./components/footer"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Main reveal animation after loading
    const tl = gsap.timeline({ delay: 3.5 })

    tl.fromTo(mainRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <LoadingScreen />
      <div ref={mainRef} className="opacity-0">
        <Hero />
        <BestSelling />
        <Features />
        <Footer />
      </div>
    </>
  )
}
