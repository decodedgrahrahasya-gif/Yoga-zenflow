"use client"

import Link from "next/link"
import { Clock, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface ClassData {
  id: string
  title: string
  slug: string
  description: string
  duration: number
  difficulty: string
  style: string
  instructor: string
  instructorAvatar: string
  rating: number
  reviewCount: number
  sessionType: string
  price: string
  tags: string[]
}

interface ClassCardProps {
  classData: ClassData
}

const difficultyStyles: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Intermediate: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Advanced: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
}

const gradients = [
  "from-sage/30 to-mint/50",
  "from-olive/20 to-sage/40",
  "from-mint/40 to-cream/60",
  "from-forest/20 to-sage/30",
  "from-olive/30 to-mint/40",
  "from-sage/20 to-olive/30",
  "from-mint/30 to-forest/20",
  "from-cream/50 to-sage/30",
  "from-forest/30 to-mint/30",
]

export function ClassCard({ classData }: ClassCardProps) {
  const {
    id,
    title,
    slug,
    description,
    duration,
    difficulty,
    instructor,
    rating,
    reviewCount,
    sessionType,
  } = classData

  const gradientIndex = parseInt(id, 10) % gradients.length

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div
        className={cn(
          "aspect-video bg-gradient-to-br",
          gradients[gradientIndex]
        )}
      />
      <CardContent className="flex flex-col gap-3 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="gap-1">
            <Clock className="size-3" />
            {duration} min
          </Badge>
          <Badge
            className={cn(
              "border-0",
              difficultyStyles[difficulty] || ""
            )}
          >
            {difficulty}
          </Badge>
        </div>
        <Link href={`/classes/${slug}`}>
          <h3 className="font-heading text-base font-medium leading-snug">
            {title}
          </h3>
        </Link>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        <div className="flex items-center gap-2">
          <Avatar size="sm">
            <AvatarFallback>{instructor[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{instructor}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="size-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-muted-foreground">
            ({reviewCount})
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                "size-2 rounded-full",
                sessionType === "Live"
                  ? "bg-green-500"
                  : "bg-muted-foreground"
              )}
            />
            <span className="text-xs text-muted-foreground">
              {sessionType}
            </span>
          </div>
          <Button size="sm">Enroll</Button>
        </div>
      </CardContent>
    </Card>
  )
}
