"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Platinum Timepiece",
    price: "$12,500",
    image: "/placeholder.svg?height=400&width=300",
    category: "Watches",
  },
  {
    id: 2,
    name: "Diamond Necklace",
    price: "$8,750",
    image: "/placeholder.svg?height=400&width=300",
    category: "Jewelry",
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: "$3,200",
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Silk Scarf",
    price: "$450",
    image: "/placeholder.svg?height=400&width=300",
    category: "Fashion",
  },
]

export default function BestSelling() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [activeProduct, setActiveProduct] = useState<number | null>(null)

  useEffect(() => {
    // Section entrance animation
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        const tl = gsap.timeline()

        tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

        // Stagger card animations
        const cards = cardsRef.current?.children
        if (cards) {
          tl.fromTo(
            Array.from(cards),
            { opacity: 0, y: 100, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: "power3.out",
            },
            "-=0.5",
          )
        }
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const handleProductHover = (productId: number, isEntering: boolean) => {
    setActiveProduct(isEntering ? productId : null)

    // Mobile: Add haptic feedback simulation
    if (window.navigator.vibrate) {
      window.navigator.vibrate(50)
    }
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-3xl md:text-5xl lg:text-6xl font-light text-center mb-16 tracking-wider opacity-0"
        >
          BEST SELLING
          <br />
          <span className="text-xl md:text-3xl lg:text-4xl text-gray-600">PRODUCTS</span>
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl ${
                activeProduct === product.id ? "scale-105" : ""
              }`}
              onMouseEnter={() => handleProductHover(product.id, true)}
              onMouseLeave={() => handleProductHover(product.id, false)}
              onTouchStart={() => handleProductHover(product.id, true)}
              onTouchEnd={() => handleProductHover(product.id, false)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                  {/* Mobile: Interactive overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hidden">
                    <Button
                      size="sm"
                      className="bg-white text-black hover:bg-gray-100 transform scale-90 group-hover:scale-100 transition-transform duration-300"
                    >
                      Quick View
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2 tracking-widest">{product.category}</p>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-light tracking-wider">{product.price}</p>

                  {/* Desktop: Hover button */}
                  <Button
                    className="w-full mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hidden md:block"
                    variant="outline"
                  >
                    Add to Cart
                  </Button>

                  {/* Mobile: Always visible button */}
                  <Button className="w-full mt-4 md:hidden bg-black text-white hover:bg-gray-800 active:scale-95 transition-transform duration-150">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="px-12 py-4 text-lg font-medium tracking-wider hover:bg-black hover:text-white transition-all duration-300"
          >
            VIEW ALL PRODUCTS
          </Button>
        </div>
      </div>
    </section>
  )
}
