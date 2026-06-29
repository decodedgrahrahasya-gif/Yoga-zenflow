"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white border-t border-[#0A3B2C]/10 p-3 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-[#64746B] uppercase tracking-wider font-medium">First class free</p>
          <p className="text-xs text-[#0A3B2C] font-medium truncate">No credit card required</p>
        </div>
        <Link
          href="/classes"
          className="inline-flex items-center gap-1.5 bg-[#0A3B2C] text-white px-5 py-3 text-xs font-medium hover:bg-[#072A1F] transition-colors shrink-0"
        >
          Book now <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  )
}
