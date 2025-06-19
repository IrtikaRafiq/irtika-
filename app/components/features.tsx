"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Shield, Truck, Award, Headphones } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Every piece comes with our comprehensive lifetime warranty and authenticity guarantee.",
  },
  {
    icon: Truck,
    title: "White Glove Delivery",
    description: "Complimentary premium delivery service with personal consultation and setup.",
  },
  {
    icon: Award,
    title: "Certified Authentic",
    description: "All items are certified authentic by our team of expert appraisers and craftsmen.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    description: "Dedicated personal shopping assistance and customer service around the clock.",
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      onEnter: () => {
        const items = featuresRef.current?.children
        if (items) {
          gsap.fromTo(
            Array.from(items),
            { opacity: 0, y: 80 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
            },
          )
        }
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6 group-hover:bg-gray-800 transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-medium mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
