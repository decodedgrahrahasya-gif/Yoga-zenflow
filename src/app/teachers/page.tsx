import Link from "next/link"
import { Star, Award } from "lucide-react"
import instructors from "@/data/instructors.json"

export const metadata = {
  title: "Teachers — ZenFlow Yoga",
  description: "Meet our world-class yoga instructors and teachers.",
}

export default function TeachersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="font-serif-zf text-5xl text-[#0A3B2C] tracking-tight">
          Master teachers
        </h1>
        <p className="mt-4 text-[#64746B] max-w-2xl">
          Every teacher on ZenFlow brings deep practice, real wisdom, and
          the ability to meet you exactly where you are.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {instructors.map((teacher) => (
          <Link
            key={teacher.id}
            href={`/teachers/${teacher.slug}`}
            className="group bg-white border border-[#0A3B2C]/10 p-8 flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="size-20 rounded-full bg-[#F5F2EB] flex items-center justify-center mb-6">
              <span className="font-serif-zf text-2xl text-[#0A3B2C]">
                {teacher.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <h2 className="font-serif-zf text-2xl text-[#0A3B2C] mb-2 group-hover:text-[#C5A059] transition-colors">
              {teacher.name}
            </h2>
            <p className="text-sm text-[#64746B] mb-6 flex-grow leading-relaxed">
              {teacher.bio}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {teacher.specializations.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-bold tracking-widest uppercase text-[#C5A059] border border-[#C5A059]/20 px-3 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs text-[#64746B] pt-4 border-t border-[#0A3B2C]/10">
              <span className="flex items-center gap-1">
                <Star className="size-3 fill-amber-400 text-amber-400" />
                {teacher.rating}
              </span>
              <span className="flex items-center gap-1">
                <Award className="size-3" />
                {teacher.experience} yrs
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
