"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ClassCard } from "@/components/classes/class-card"

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

interface ClassGridProps {
  classes: ClassData[]
  loading?: boolean
}

function SkeletonCard() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-video rounded-none" />
      <CardContent className="flex flex-col gap-3 p-4">
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex items-center gap-2">
          <Skeleton className="size-6 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
      </CardContent>
    </Card>
  )
}

export function ClassGrid({ classes, loading }: ClassGridProps) {
  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  if (classes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-lg font-medium text-foreground">
          No classes match your filters
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Try adjusting your search or filter criteria
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {classes.map((classData) => (
        <ClassCard key={classData.id} classData={classData} />
      ))}
    </div>
  )
}
