"use client"

import { Brain, Activity, Leaf, Moon, HeartPulse } from "lucide-react"
import { cn } from "@/lib/utils"

export function AIFeatures() {
  const features = [
    {
      icon: Brain,
      title: "Personalized Recommendations",
      description: "Our AI learns from your practice history, sleep patterns, and mood to suggest the perfect yoga sequences for your nervous system today.",
      color: "text-[#C5A059]"
    },
    {
      icon: Activity,
      title: "Biometric Integration",
      description: "Real-time HRV, breath rate, and stress monitoring adjusts practice intensity in real-time for optimal balance.",
      color: "text-[#0A3B2C]"
    },
    {
      icon: Leaf,
      title: "Wellness Journal",
      description: "Daily mood and sleep tracking woven naturally into your practice — beautiful insights without the effort.",
      color: "text-[#64746B]"
    },
    {
      icon: Moon,
      title: "Circadian Flows",
      description: "Morning openers, midday resets, and wind-down practices tailored to your natural body clock.",
      color: "text-[#FDFBF7]"
    },
    {
      icon: HeartPulse,
      title: "Adaptive Sequencing",
      description: "Every flow rewritten the moment your body changes — dynamic practices that evolve with you.",
      color: "text-[#C5A059]"
    },
  ]

  return (
    <section id="ai-features" className="py-24 md:py-32 bg-[#FDFBF7] -mt-8 md:-mt-16 mb-24 md:mb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-16 md:mb-24">
          <div className="md:col-span-7">
            <span className="font-sans-zf text-[11px] md:text-xs tracking-overline uppercase font-semibold text-[#C5A059]">
              02 — Quiet Intelligence
            </span>
            <h2 className="font-serif-zf text-4xl md:text-6xl lg:text-7xl text-[#0A3B2C] mt-6 leading-[1.05] tracking-tight font-light">
              Technology that <span className="italic">disappears</span>,
              <br />
              <span className="text-[#C5A059] italic">arrives</span>.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="font-sans-zf text-base md:text-lg text-[#1A2520]/75 leading-relaxed">
              Our intelligence layer studies your sleep, mood, hormonal cycle and posture history to recommend
              the exact sequence your nervous system needs today. No noise. No notifications. Just the right
              practice, at the right moment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {/* Tile 1 — large */}
          <div className="md:col-span-7 relative h-[420px] md:h-[480px] overflow-hidden bg-[#0A3B2C] text-[#FDFBF7]">
            <img
              src="https://images.pexels.com/photos/13865973/13865973.jpeg"
              alt="Woman meditating peacefully in a sunlit forest"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A3B2C]/95 via-[#0A3B2C]/40 to-transparent" />
            <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
              <Brain size={28} className="text-[#C5A059]" strokeWidth={1.2} />
              <div>
                <span className="font-sans-zf text-[11px] tracking-overline uppercase text-[#C5A059] dark:text-[#C5A059]">Adaptive sequencing</span>
                <h3 className="font-serif-zf text-3xl md:text-5xl mt-3 max-w-md leading-tight">
                  Every flow rewritten the moment your body changes.
                </h3>
              </div>
            </div>
          </div>

          {/* Tile 2 */}
          <div className="md:col-span-5 h-[420px] md:h-[480px] border border-[#0A3B2C]/15 p-8 md:p-10 flex flex-col justify-between bg-[#F5F2EB]">
            <HeartPulse size={28} className="text-[#0A3B2C]" strokeWidth={1.2} />
            <div>
              <span className="font-sans-zf text-[11px] tracking-overline uppercase text-[#0A3B2C]">Biometric attunement</span>
              <h3 className="font-serif-zf text-2xl md:text-3xl text-[#0A3B2C] mt-3 leading-snug">
                Reads HRV, breath rate and stress markers — then softens or sharpens the practice in real-time.
              </h3>
            </div>
          </div>

          {/* Tile 3 */}
          <div className="md:col-span-4 h-[360px] border border-[#0A3B2C]/15 p-8 flex flex-col justify-between bg-[#FDFBF7]">
            <Moon size={26} className="text-[#0A3B2C]" strokeWidth={1.2} />
            <div>
              <span className="font-sans-zf text-[11px] tracking-overline uppercase text-[#0A3B2C]">Circadian flows</span>
              <h3 className="font-serif-zf text-2xl text-[#0A3B2C] mt-3 leading-snug">
                Morning openers. Midday resets. Wind-downs that escort you into sleep.
              </h3>
            </div>
          </div>

          {/* Tile 4 */}
          <div className="md:col-span-4 h-[360px] bg-[#0A3B2C] text-[#FDFBF7] p-8 flex flex-col justify-between">
            <Activity size={26} className="text-[#C5A059]" strokeWidth={1.2} />
            <div>
              <span className="font-sans-zf text-[11px] tracking-overline uppercase text-[#FDFBF7] dark:text-[#C5A059]">Posture vision</span>
              <h3 className="font-serif-zf text-2xl mt-3 leading-snug">
                On-camera alignment cues, delivered as a teacher would — gently, precisely, never invasive.
              </h3>
            </div>
          </div>

          {/* Tile 5 */}
          <div className="md:col-span-4 h-[360px] border border-[#0A3B2C]/15 p-8 flex flex-col justify-between bg-[#F5F2EB]">
            <Leaf size={26} className="text-[#0A3B2C]" strokeWidth={1.2} />
            <div>
              <span className="font-sans-zf text-[11px] tracking-overline uppercase text-[#0A3B2C]">Wellness journal</span>
              <h3 className="font-serif-zf text-2xl text-[#0A3B2C] mt-3 leading-snug">
                Mood, sleep & cycle tracking woven into your practice — quiet insight, no dashboards.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}