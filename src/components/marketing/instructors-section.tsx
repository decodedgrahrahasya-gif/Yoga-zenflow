import Link from "next/link"
import Image from "next/image"
import { Award, Star, BookOpen, ArrowRight } from "lucide-react"
import instructorsData from "@/data/instructors.json"

const instructorImages: Record<string, string> = {
  "Sarah Chen": "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=400&q=80",
  "Mark Rivera": "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=400&q=80",
  "Priya Sharma": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=400&q=80",
}

export function InstructorsSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 border-t border-[#0A3B2C]/10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
            Instructors
          </p>
          <h2 className="font-serif-zf text-4xl md:text-5xl text-[#0A3B2C] tracking-tight">
            Learn from <span className="italic">certified</span> teachers
          </h2>
        </div>
        <Link
          href="/teachers"
          className="group flex items-center text-sm font-medium text-[#C5A059] hover:text-[#B38F46] transition-colors mt-4 md:mt-0 shrink-0"
        >
          Meet all instructors <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {instructorsData.slice(0, 3).map((instructor) => {
          const imgSrc = instructorImages[instructor.name]
          return (
            <div
              key={instructor.id}
              className="bg-white border border-[#0A3B2C]/10 p-6 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="size-14 rounded-full overflow-hidden shrink-0 bg-[#F5F2EB]">
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={instructor.name}
                      width={56}
                      height={56}
                      className="object-cover size-full"
                    />
                  ) : (
                    <span className="font-serif-zf text-xl text-[#0A3B2C] flex items-center justify-center size-full">
                      {instructor.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-serif-zf text-lg text-[#0A3B2C]">{instructor.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="size-3.5 fill-[#C5A059] text-[#C5A059]" strokeWidth={1.5} />
                      <span className="text-xs font-medium text-[#0A3B2C]">{instructor.rating}</span>
                    </div>
                    <span className="text-xs text-[#64746B]">({instructor.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#64746B] leading-relaxed mb-5 flex-grow line-clamp-3">
                {instructor.bio}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#0A3B2C]/10">
                <div className="flex items-center gap-2 text-xs text-[#64746B]">
                  <Award className="size-3.5 text-[#C5A059]" strokeWidth={1.5} />
                  <span>{instructor.certifications.slice(0, 2).join(", ")}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#64746B]">
                  <BookOpen className="size-3.5 text-[#C5A059]" strokeWidth={1.5} />
                  <span>{instructor.experience} years · {instructor.specializations.slice(0, 2).join(", ")}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
