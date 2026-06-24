"use client"

import { motion } from "framer-motion"
import {
  Flower2,
  Video,
  Brain,
  Heart,
  Sparkles,
  Award,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const features = [
  {
    icon: Flower2,
    title: "Live Yoga Classes",
    description:
      "Join expert-led sessions in real-time from the comfort of your home.",
  },
  {
    icon: Video,
    title: "On-Demand Video Library",
    description:
      "Access hundreds of recorded classes anytime, anywhere.",
  },
  {
    icon: Brain,
    title: "Meditation Sessions",
    description:
      "Guided meditations to calm your mind and reduce stress.",
  },
  {
    icon: Heart,
    title: "Wellness Tracking",
    description:
      "Monitor your progress with detailed analytics and insights.",
  },
  {
    icon: Sparkles,
    title: "AI Wellness Assistant",
    description:
      "Personalized recommendations powered by intelligent algorithms.",
  },
  {
    icon: Award,
    title: "Certified Instructors",
    description:
      "Learn from world-class teachers with years of experience.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function FeaturesGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold">
            Everything You Need to Thrive
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete wellness ecosystem designed to support your journey.
          </p>
        </div>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div key={feature.title} variants={cardVariants}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <Icon className="size-8 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent />
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export { FeaturesGrid }
