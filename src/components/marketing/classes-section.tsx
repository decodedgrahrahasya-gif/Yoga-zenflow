import Link from "next/link"
import Image from "next/image"
import { Clock, User, Tag, ArrowRight } from "lucide-react"
import classesData from "@/data/classes.json"

const intensityColors: Record<string, string> = {
  Beginner: "bg-[#6D9773] text-white",
  Intermediate: "bg-[#C5A059] text-white",
  Advanced: "bg-[#0A3B2C] text-white",
  "All Levels": "bg-[#64746B] text-white",
}

const typeColors: Record<string, string> = {
  Live: "bg-[#0A3B2C] text-white",
  Recorded: "bg-[#F5F2EB] text-[#64746B]",
}

const classImages: Record<string, string> = {
  "Vinyasa Flow": "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80",
  "Yin Yoga": "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&w=800&q=80",
  "Hatha Basics": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  "Power Yoga": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  "Restorative Yoga": "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&w=800&q=80",
  "Prenatal Yoga": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
  "Ashtanga Primary Series": "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80",
  "Morning Flow Meditation": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  "Chair Yoga for Office": "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=80",
}

export function ClassesSection() {
  const displayClasses = classesData.slice(0, 6)

  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 border-t border-[#0A3B2C]/10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
            Classes
          </p>
          <h2 className="font-serif-zf text-4xl md:text-5xl text-[#0A3B2C] tracking-tight">
            Choose a class that matches your <span className="italic">energy, schedule, and level.</span>
          </h2>
        </div>
        <Link
          href="/classes"
          className="group flex items-center text-sm font-medium text-[#C5A059] hover:text-[#B38F46] transition-colors mt-4 md:mt-0 shrink-0"
        >
          View all classes <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayClasses.map((cls) => {
          const diffClass = intensityColors[cls.difficulty] || intensityColors["All Levels"]
          const typeClass = typeColors[cls.sessionType] || typeColors.Recorded
          const imgSrc = classImages[cls.title]
          return (
            <Link
              key={cls.id}
              href={`/classes/${cls.slug}`}
              className="bg-white border border-[#0A3B2C]/10 flex flex-col group hover:border-[#C5A059]/30 hover:shadow-md transition-all overflow-hidden"
            >
              {imgSrc && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F5F2EB]">
                  <Image
                    src={imgSrc}
                    alt={cls.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-start gap-2 flex-wrap">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm ${diffClass}`}>
                      {cls.difficulty}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm ${typeClass}`}>
                      {cls.sessionType}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-5 flex flex-col flex-grow">
                {!imgSrc && (
                  <div className="flex items-start gap-2 mb-4 flex-wrap">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm ${diffClass}`}>
                      {cls.difficulty}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm ${typeClass}`}>
                      {cls.sessionType}
                    </span>
                  </div>
                )}

                <h3 className="font-serif-zf text-xl text-[#0A3B2C] mb-2 group-hover:text-[#C5A059] transition-colors">
                  {cls.title}
                </h3>
                <p className="text-sm text-[#64746B] leading-relaxed mb-5 flex-grow line-clamp-2">
                  {cls.description}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-[#0A3B2C]/10 text-xs text-[#64746B]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" strokeWidth={1.5} />
                    {cls.duration} min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="size-3.5" strokeWidth={1.5} />
                    {cls.instructor}
                  </span>
                  {cls.tags && cls.tags.length > 0 && (
                    <span className="flex items-center gap-1.5">
                      <Tag className="size-3.5" strokeWidth={1.5} />
                      {cls.tags[0]}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
