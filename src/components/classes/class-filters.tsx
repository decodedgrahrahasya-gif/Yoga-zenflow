"use client"

import { Search } from "lucide-react"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

interface FilterValues {
  difficulty: string
  duration: string
  style: string
  sessionType: string
  search: string
}

interface ClassFiltersProps {
  filters: FilterValues
  onFiltersChange: (filters: FilterValues) => void
}

export function ClassFilters({
  filters,
  onFiltersChange,
}: ClassFiltersProps) {
  const updateFilter = (key: keyof FilterValues, value: string | null) => {
    onFiltersChange({ ...filters, [key]: value ?? "all" })
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Select
        value={filters.difficulty}
        onValueChange={(value) => updateFilter("difficulty", value)}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Difficulty" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Levels</SelectItem>
          <SelectItem value="Beginner">Beginner</SelectItem>
          <SelectItem value="Intermediate">Intermediate</SelectItem>
          <SelectItem value="Advanced">Advanced</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.duration}
        onValueChange={(value) => updateFilter("duration", value)}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="any">Any</SelectItem>
          <SelectItem value="under20">Under 20 min</SelectItem>
          <SelectItem value="20-45">20-45 min</SelectItem>
          <SelectItem value="45-60">45-60 min</SelectItem>
          <SelectItem value="60plus">60+ min</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.style}
        onValueChange={(value) => updateFilter("style", value)}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Style" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Styles</SelectItem>
          <SelectItem value="Hatha">Hatha</SelectItem>
          <SelectItem value="Vinyasa">Vinyasa</SelectItem>
          <SelectItem value="Yin">Yin</SelectItem>
          <SelectItem value="Power">Power</SelectItem>
          <SelectItem value="Restorative">Restorative</SelectItem>
          <SelectItem value="Ashtanga">Ashtanga</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.sessionType}
        onValueChange={(value) => updateFilter("sessionType", value)}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Session Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Live">Live</SelectItem>
          <SelectItem value="Recorded">Recorded</SelectItem>
        </SelectContent>
      </Select>

      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <Input
          type="search"
          placeholder="Search classes..."
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          className="pl-8"
        />
      </div>
    </div>
  )
}
