"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "This platform changed my life. I've never felt more balanced and at peace.",
    author: "Sarah M.",
    rating: 5,
  },
  {
    quote:
      "The instructors are world-class. Every class feels personal and intentional.",
    author: "David K.",
    rating: 5,
  },
  {
    quote:
      "I started as a complete beginner and now I can do poses I never imagined.",
    author: "Maria G.",
    rating: 5,
  },
]

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
}

function Testimonials() {
  const [[current, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    const next =
      (current + newDirection + testimonials.length) % testimonials.length
    setPage([next, newDirection])
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold">
            What Our Community Says
          </h2>
          <p className="mt-2 text-muted-foreground">
            Hear from people who transformed their lives with ZenFlow.
          </p>
        </div>
        <div className="relative mx-auto max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Card className="text-center">
                <CardContent className="space-y-4 p-8">
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: testimonials[current].rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="size-5 fill-amber-400 text-amber-400"
                        />
                      )
                    )}
                  </div>
                  <p className="text-lg italic leading-relaxed text-muted-foreground">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <p className="font-semibold">
                    &mdash; {testimonials[current].author}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage([i, i > current ? 1 : -1])}
                  className={`size-2 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                >
                  <span className="sr-only">Testimonial {i + 1}</span>
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Testimonials }
