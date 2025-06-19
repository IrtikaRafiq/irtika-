"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    // Split text into words for animation
    const paragraph = paragraphRef.current
    if (paragraph) {
      const text = paragraph.textContent || ""
      const words = text.split(" ")

      paragraph.innerHTML = words.map((word) => `<span class="word opacity-30">${word}</span>`).join(" ")

      const wordElements = paragraph.querySelectorAll(".word")

      // Word darkening animation on scroll
      ScrollTrigger.create({
        trigger: paragraph,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const wordsToShow = Math.floor(progress * wordElements.length)

          wordElements.forEach((word, index) => {
            if (index <= wordsToShow) {
              gsap.to(word, { opacity: 1, duration: 0.3 })
            }
          })
        },
      })
    }

    // Hero entrance animation
    const tl = gsap.timeline({ delay: 4 })

    tl.fromTo(titleRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }).fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5",
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-8xl font-light mb-8 tracking-wider opacity-0">
          LUXURY
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl text-gray-400">REDEFINED</span>
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p
            ref={paragraphRef}
            className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light tracking-wide opacity-0"
          >
            Experience the pinnacle of craftsmanship and design. Our curated collection represents the finest in luxury
            goods, where every detail speaks to uncompromising quality and timeless elegance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105"
          >
            EXPLORE COLLECTION
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105"
          >
            WATCH STORY
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-white opacity-50 animate-pulse" />
      </div>
    </section>
  )
}
