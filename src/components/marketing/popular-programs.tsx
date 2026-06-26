"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
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
import programs from "@/data/programs.json"

const gradients = [
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-violet-400 to-purple-500",
  "from-rose-400 to-pink-500",
  "from-sky-400 to-blue-500",
]

function PopularPrograms() {
  const displayPrograms = programs.slice(0, 5)

  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold">
            Popular Programs
          </h2>
          <p className="mt-2 text-muted-foreground">
            Structured journeys designed for every goal and level.
          </p>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {displayPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              className="min-w-[300px] snap-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col overflow-hidden">
                <div
                  className={`h-40 bg-gradient-to-br ${gradients[index % gradients.length]}`}
                />
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {program.duration}
                    </span>
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>
                    {program.description.length > 100
                      ? `${program.description.slice(0, 100)}...`
                      : program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <Badge variant="secondary">{program.difficulty}</Badge>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1" nativeButton={false} render={<Link href={`/programs/${program.slug}`} />}>
                    Learn More
                    <ArrowRight className="size-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { PopularPrograms }
