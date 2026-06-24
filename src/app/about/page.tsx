import Link from "next/link"
import { ArrowUpRight, Heart, Sparkles, Users, Globe } from "lucide-react"

export const metadata = {
  title: "About — ZenFlow Yoga",
  description: "Our mission is to make yoga intelligent, accessible, and deeply personal.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-20">
        <span className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase">
          About
        </span>
        <h1 className="font-serif-zf text-5xl md:text-6xl text-[#0A3B2C] mt-6 tracking-tight leading-[1.1]">
          Yoga is not a workout. <br />
          <span className="text-[#C5A059] italic">It is a homecoming.</span>
        </h1>
        <p className="text-[#64746B] text-lg mt-8 leading-relaxed">
          ZenFlow was founded to bridge ancient yoga wisdom with modern
          technology — not to replace the teacher, but to remove every barrier
          between you and the mat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <div className="bg-[#0A3B2C] p-10 text-white">
          <Heart className="size-8 text-[#C5A059] mb-6" strokeWidth={1.2} />
          <h3 className="font-serif-zf text-3xl mb-4">Our mission</h3>
          <p className="text-white/70 leading-relaxed">
            To make intelligent, personalised yoga accessible to every human on
            the planet. We believe the right practice at the right moment can
            change everything.
          </p>
        </div>
        <div className="bg-[#F5F2EB] p-10 text-[#0A3B2C]">
          <Sparkles className="size-8 text-[#C5A059] mb-6" strokeWidth={1.2} />
          <h3 className="font-serif-zf text-3xl mb-4">Our approach</h3>
          <p className="text-[#64746B] leading-relaxed">
            Technology that disappears into the background, teachers who meet
            you where you are, and a community that holds space for your growth.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#0A3B2C]/10 pt-16 mb-20">
        <div className="text-center">
          <p className="font-serif-zf text-5xl text-[#0A3B2C]">120k+</p>
          <p className="text-[11px] text-[#64746B] uppercase tracking-widest mt-2">Practitioners</p>
        </div>
        <div className="text-center">
          <p className="font-serif-zf text-5xl text-[#0A3B2C]">48</p>
          <p className="text-[11px] text-[#64746B] uppercase tracking-widest mt-2">Master teachers</p>
        </div>
        <div className="text-center">
          <p className="font-serif-zf text-5xl text-[#0A3B2C]">4.9</p>
          <p className="text-[11px] text-[#64746B] uppercase tracking-widest mt-2">App store rating</p>
        </div>
      </div>

      <div className="text-center border-t border-[#0A3B2C]/10 pt-16">
        <h2 className="font-serif-zf text-3xl text-[#0A3B2C] mb-6">
          Ready to begin?
        </h2>
        <Link href="/sign-up" className="inline-flex items-center gap-2 bg-[#0A3B2C] text-white px-8 py-4 text-sm font-medium hover:bg-[#072A1F] transition-colors">
          Start 14-day trial <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </div>
  )
}
