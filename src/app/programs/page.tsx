import Link from "next/link"
import { ArrowUpRight, Clock, User } from "lucide-react"
import programs from "@/data/programs.json"

export const metadata = {
  title: "Programs — ZenFlow Yoga",
  description: "Structured multi-week yoga programs designed for every goal.",
}

export default function ProgramsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="font-serif-zf text-5xl text-[#0A3B2C] tracking-tight">
          Programs
        </h1>
        <p className="mt-4 text-[#64746B] max-w-2xl">
          Structured journeys designed for every goal and level. Each program
          is a curated path with intent, not just a playlist.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <Link
            key={program.id}
            href={`/programs/${program.slug}`}
            className="group bg-white border border-[#0A3B2C]/10 p-6 flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#C5A059]">
                {program.difficulty}
              </span>
            </div>
            <h2 className="font-serif-zf text-2xl text-[#0A3B2C] mb-3 group-hover:text-[#C5A059] transition-colors">
              {program.title}
            </h2>
            <p className="text-sm text-[#64746B] mb-6 flex-grow leading-relaxed">
              {program.description}
            </p>
            <div className="flex items-center gap-4 text-xs text-[#64746B] pt-4 border-t border-[#0A3B2C]/10">
              <span className="flex items-center gap-1">
                <Clock className="size-3" />
                {program.duration}
              </span>
              <span className="flex items-center gap-1">
                <User className="size-3" />
                {program.instructor}
              </span>
              <ArrowUpRight className="size-4 ml-auto text-[#C5A059] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
