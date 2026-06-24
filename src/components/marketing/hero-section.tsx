"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, var(--primary) 1px, transparent 1px), radial-gradient(circle at 75% 75%, var(--secondary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={childVariants}
            className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Discover Your Inner Balance
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="mt-6 text-lg text-muted-foreground md:text-xl"
          >
            Join live yoga classes, guided meditation sessions, and personalized
            wellness programs.
          </motion.p>
          <motion.div
            variants={childVariants}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <Button size="lg" render={<Link href="/pricing" />}>
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" render={<Link href="/classes" />}>
              Explore Classes
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { HeroSection }
