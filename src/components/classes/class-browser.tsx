"use client"

import { useState } from "react"

import classesData from "@/data/classes.json"
import { ClassFilters } from "@/components/classes/class-filters"
import { ClassGrid } from "@/components/classes/class-grid"

interface FilterValues {
  difficulty: string
  duration: string
  style: string
  sessionType: string
  search: string
}

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

const defaultFilters: FilterValues = {
  difficulty: "all",
  duration: "any",
  style: "all",
  sessionType: "all",
  search: "",
}

function matchesDuration(duration: number, filter: string): boolean {
  switch (filter) {
    case "under20":
      return duration < 20
    case "20-45":
      return duration >= 20 && duration <= 45
    case "45-60":
      return duration >= 45 && duration <= 60
    case "60plus":
      return duration > 60
    default:
      return true
  }
}

export function ClassBrowser() {
  const [filters, setFilters] = useState<FilterValues>(defaultFilters)

  const filteredClasses = (classesData as ClassData[]).filter((c) => {
    if (filters.difficulty !== "all" && c.difficulty !== filters.difficulty) {
      return false
    }
    if (filters.duration !== "any" && !matchesDuration(c.duration, filters.duration)) {
      return false
    }
    if (filters.style !== "all" && c.style !== filters.style) {
      return false
    }
    if (filters.sessionType !== "all" && c.sessionType !== filters.sessionType) {
      return false
    }
    if (filters.search) {
      const q = filters.search.toLowerCase()
      const inTitle = c.title.toLowerCase().includes(q)
      const inDesc = c.description.toLowerCase().includes(q)
      const inInstructor = c.instructor.toLowerCase().includes(q)
      const inTags = c.tags.some((t) => t.toLowerCase().includes(q))
      if (!inTitle && !inDesc && !inInstructor && !inTags) {
        return false
      }
    }
    return true
  })

  return (
    <div className="flex flex-col gap-8">
      <ClassFilters
        filters={filters}
        onFiltersChange={setFilters}
      />
      <ClassGrid classes={filteredClasses} />
    </div>
  )
}
