"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Slide = {
  id: string
  pose: string
  sanskrit: string
  title: string
  description: string
  image: string
  alt: string
}

const brandHeadline = "Yoga in San Francisco for calmer mornings, stronger bodies, and steadier minds."
const brandSubtext = "Join beginner-friendly and advanced classes led by certified instructors in a peaceful studio space. First class free — no credit card required."

const slides: Slide[] = [
  {
    id: "tree",
    pose: "Tree Pose",
    sanskrit: "Vrksasana",
    title: brandHeadline,
    description: brandSubtext,
    image: "/images/tree-pose.png",
    alt: "Woman practicing Tree Pose in a sunlit minimalist studio",
  },
  {
    id: "warrior",
    pose: "Warrior II",
    sanskrit: "Virabhadrasana II",
    title: brandHeadline,
    description: brandSubtext,
    image: "/images/warrior-2.png",
    alt: "Woman practicing Warrior II Pose in soft natural light",
  },
  {
    id: "lotus",
    pose: "Lotus Pose",
    sanskrit: "Padmasana",
    title: brandHeadline,
    description: brandSubtext,
    image: "/images/lotus-pose.png",
    alt: "Woman meditating in Lotus Pose with eyes closed",
  },
  {
    id: "downward-dog",
    pose: "Downward Dog",
    sanskrit: "Adho Mukha Svanasana",
    title: brandHeadline,
    description: brandSubtext,
    image: "/images/downward-dog.png",
    alt: "Woman practicing Downward Dog Pose in a calm studio",
  },
  {
    id: "childs",
    pose: "Child's Pose",
    sanskrit: "Balasana",
    title: brandHeadline,
    description: brandSubtext,
    image: "/images/childs-pose.png",
    alt: "Woman resting in Child's Pose on a yoga mat",
  },
]

const AUTOPLAY_MS = 2000

export function HeroSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(active + 1), [active, goTo])
  const prev = useCallback(() => goTo(active - 1), [active, goTo])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured yoga postures"
      className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      style={{
        marginTop: "50px"
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${slides.length}: ${slide.pose}`}
          aria-hidden={i !== active}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            i === active ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="80vw"
            className={cn(
              "object-cover transition-transform duration-[7000ms] ease-out",
              i === active ? "scale-105" : "scale-100",
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/55 via-foreground/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-foreground/10" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-xl">
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                aria-hidden={i !== active}
                className={cn(
                  "transition-all duration-700 ease-out",
                  i === active
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none absolute translate-y-4 opacity-0",
                )}
              >
                {i === active && (
                  <>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-px w-10 bg-background/70" />
                      <span className="text-xs font-medium uppercase tracking-[0.25em] text-background/90">
                        {slide.pose}
                        <span className="ml-2 italic text-background/60">
                          {slide.sanskrit}
                        </span>
                      </span>
                    </div>
                    <h1 className="font-heading text-4xl font-medium leading-[1.05] text-balance text-background sm:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-background/85 sm:text-lg">
                      {slide.description}
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Button
                        size="lg"
                        className="bg-[#C5A059] text-white hover:bg-[#B38F46]"
                      >
                        Book your first class
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-background/40 bg-transparent text-background hover:bg-background/10 hover:text-background"
                      >
                        View this week&apos;s schedule
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-6 pb-8 md:px-12">
        <div className="flex items-center gap-3" role="tablist" aria-label="Choose slide">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to ${slide.pose}`}
              onClick={() => goTo(i)}
              className="group relative py-2"
            >
              <span
                className={cn(
                  "block h-1 rounded-full transition-all duration-500",
                  i === active
                    ? "w-10 bg-background"
                    : "w-4 bg-background/40 group-hover:bg-background/70",
                )}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-sm text-background/80 sm:block">
            <span className="text-background">
              {String(active + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(slides.length).padStart(2, "0")}
          </span>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="flex size-11 items-center justify-center rounded-full border border-background/40 bg-background/10 text-background backdrop-blur-sm transition-colors hover:bg-background/20"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="flex size-11 items-center justify-center rounded-full border border-background/40 bg-background/10 text-background backdrop-blur-sm transition-colors hover:bg-background/20"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 h-0.5 bg-background/15">
        <div
          key={`${active}-${paused}`}
          className={cn("h-full bg-background/80", !paused && "animate-hero-progress")}
        />
      </div>
    </section>
  )
}
