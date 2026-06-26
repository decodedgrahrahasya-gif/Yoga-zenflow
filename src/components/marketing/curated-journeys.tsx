import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const programs = [
  {
    href: "/programs/foundations",
    img: "https://images.unsplash.com/photo-1758797316894-c25b94e8426a?auto=format&fit=crop&w=800&q=80",
    alt: "Woman meditating on a yoga mat outdoors in the Himalayan foothills",
    category: "Foundations",
    number: "01",
    title: "Pranayama & Foundation Flow",
    description: "A grounding return to the mat — pranayama, mobility and seated stillness.",
    meta: "21 days · 15 min/day",
  },
  {
    href: "/programs/strength",
    img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80",
    alt: "Woman practicing Warrior II Pose in a bright, colorful studio",
    category: "Strength",
    number: "02",
    title: "Vinyasa Strength Progression",
    description: "Build strength without urgency. A patient progression for sustainable power.",
    meta: "30 days · 30 min/day",
  },
  {
    href: "/programs/restoration",
    img: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&w=800&q=80",
    alt: "Woman resting in Child's Pose on a brightly colored yoga mat",
    category: "Restoration",
    number: "03",
    title: "Deep Restorative Yin",
    description: "Yin, restorative and yoga nidra — for the over-stimulated nervous system.",
    meta: "14 days · 20 min/day",
  },
]

export function CuratedJourneys() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <h2 className="font-serif-zf text-5xl md:text-6xl text-[#0A3B2C] tracking-tight">
          Curated journeys, <span className="text-[#C5A059] italic">not</span> a content library.
        </h2>
        <Link href="/programs" className="group flex items-center text-sm font-medium hover:text-[#C5A059] transition-colors mt-6 md:mt-0 pb-2">
          View all 40 programs <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((p) => (
          <Link
            key={p.number}
            href={p.href}
            className="bg-white p-6 shadow-sm border border-[#0A3B2C]/10 flex flex-col group cursor-pointer transition-shadow hover:shadow-md h-full"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-gray-100">
              <Image
                src={p.img}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-center text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
              <span>{p.category}</span>
              <span>{p.number}</span>
            </div>
            <h3 className="font-serif-zf text-[28px] leading-tight mb-3 text-[#0A3B2C] font-medium tracking-tight">
              {p.title}
            </h3>
            <p className="text-sm text-[#64746B] mb-8 flex-grow leading-relaxed">
              {p.description}
            </p>
            <div className="flex justify-between items-center text-xs text-[#64746B] pt-5 border-t border-[#0A3B2C]/10">
              <span>{p.meta}</span>
              <ArrowUpRight className="size-4 text-[#C5A059]" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
