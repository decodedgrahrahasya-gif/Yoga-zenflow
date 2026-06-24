import Link from "next/link"
import { ArrowUpRight, Sparkles, Heart, Activity, Moon } from "lucide-react"

export const metadata = {
  title: "Practice — ZenFlow Yoga",
  description: "Explore our yoga classes, programs, and meditation sessions.",
}

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="font-serif-zf text-5xl text-[#0A3B2C] tracking-tight mb-6">
          Your practice, <span className="text-[#C5A059] italic">your way.</span>
        </h1>
        <p className="text-[#64746B] max-w-2xl">
          Whether you have 15 minutes or 75, there is a practice waiting for you.
          Explore classes, follow a program, or let our AI guide you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/classes" className="group bg-[#0A3B2C] p-8 text-white flex flex-col justify-between h-[280px] hover:bg-[#072A1F] transition-colors">
          <Sparkles className="size-6 text-[#C5A059]" />
          <div>
            <h3 className="font-serif-zf text-2xl mb-2">Classes</h3>
            <p className="text-sm text-white/70">Live & recorded sessions for every level.</p>
          </div>
        </Link>
        <Link href="/programs" className="group bg-white border border-[#0A3B2C]/10 p-8 flex flex-col justify-between h-[280px] hover:shadow-md transition-shadow">
          <Heart className="size-6 text-[#0A3B2C]" />
          <div>
            <h3 className="font-serif-zf text-2xl text-[#0A3B2C] mb-2">Programs</h3>
            <p className="text-sm text-[#64746B]">Structured journeys with clear progression.</p>
          </div>
        </Link>
        <Link href="/teachers" className="group bg-[#F5F2EB] p-8 flex flex-col justify-between h-[280px] hover:bg-[#EBE8DF] transition-colors">
          <Activity className="size-6 text-[#0A3B2C]" />
          <div>
            <h3 className="font-serif-zf text-2xl text-[#0A3B2C] mb-2">Teachers</h3>
            <p className="text-sm text-[#64746B]">Learn from master instructors worldwide.</p>
          </div>
        </Link>
        <Link href="/blog" className="group bg-white border border-[#0A3B2C]/10 p-8 flex flex-col justify-between h-[280px] hover:shadow-md transition-shadow">
          <Moon className="size-6 text-[#0A3B2C]" />
          <div>
            <h3 className="font-serif-zf text-2xl text-[#0A3B2C] mb-2">Journal</h3>
            <p className="text-sm text-[#64746B]">Wellness insights and mindful living.</p>
          </div>
        </Link>
      </div>

      <div className="mt-16 text-center border-t border-[#0A3B2C]/10 pt-16">
        <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
          Not sure where to start?
        </p>
        <Link href="/programs" className="inline-flex items-center gap-2 bg-[#0A3B2C] text-white px-8 py-4 text-sm font-medium hover:bg-[#072A1F] transition-colors">
          Take our assessment <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </div>
  )
}
