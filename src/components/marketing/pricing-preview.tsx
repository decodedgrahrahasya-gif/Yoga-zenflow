"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for beginners exploring yoga.",
    features: [
      "Limited classes per month",
      "Community access",
      "Basic analytics",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$39",
    description: "For dedicated practitioners.",
    features: [
      "Unlimited classes",
      "Meditation library",
      "Progress tracking",
      "Priority booking",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$79",
    description: "The ultimate wellness experience.",
    features: [
      "Personal coaching",
      "Nutrition guidance",
      "Priority support",
      "Exclusive workshops",
      "Offline access",
    ],
    popular: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function PricingPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose the plan that fits your wellness journey.
          </p>
        </div>
        <motion.div
          className="grid gap-8 lg:grid-cols-3 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={cardVariants}>
              <Card
                className={cn(
                  "relative flex h-full flex-col",
                  plan.popular && "border-primary shadow-lg"
                )}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="font-heading text-4xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      /mo
                    </span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="size-4 shrink-0 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full"
                    render={<Link href="/pricing" />}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { PricingPreview }
