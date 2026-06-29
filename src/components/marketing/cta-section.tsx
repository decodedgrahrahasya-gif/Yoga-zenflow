import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24">
      <div className="bg-[#0A3B2C] p-12 md:p-16 text-center relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
            Begin Today
          </p>
          <h2 className="font-serif-zf text-3xl md:text-5xl text-white tracking-tight mb-6">
            Ready to step onto the mat?
          </h2>
          <p className="text-white/80 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
            Your first class is free — no commitment, no credit card required. Come as you are,
            and experience what a real yoga community feels like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/classes"
              className="inline-flex items-center justify-center bg-[#C5A059] text-white px-8 py-4 text-sm font-medium hover:bg-[#B38F46] transition-colors group"
            >
              Book your first class <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              View this week&apos;s schedule
            </Link>
          </div>
          <p className="text-white/50 text-xs mt-6">
            🎉 First class free · No credit card required · 500+ happy members
          </p>
        </div>
      </div>
    </section>
  )
}
