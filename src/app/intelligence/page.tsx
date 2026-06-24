import { Brain, HeartPulse, Moon, Activity, Leaf } from "lucide-react"

export const metadata = {
  title: "Intelligence — ZenFlow Yoga",
  description: "AI-powered wellness technology that adapts to your body.",
}

const features = [
  {
    icon: Brain,
    title: "Adaptive Sequencing",
    description: "Every flow rewritten the moment your body changes. Our AI learns from your practice history, sleep patterns, and mood to suggest the perfect sequences.",
    color: "bg-[#0A3B2C] text-white",
  },
  {
    icon: HeartPulse,
    title: "Biometric Attunement",
    description: "Reads HRV, breath rate, and stress markers — then softens or sharpens the practice in real-time for optimal balance.",
    color: "bg-[#F5F2EB] text-[#0A3B2C]",
  },
  {
    icon: Moon,
    title: "Circadian Flows",
    description: "Morning openers, midday resets, and wind-down practices tailored to your natural body clock.",
    color: "bg-white border border-[#0A3B2C]/10 text-[#0A3B2C]",
  },
  {
    icon: Activity,
    title: "Posture Vision",
    description: "On-camera alignment cues, delivered as a teacher would — gently, precisely, never invasive.",
    color: "bg-[#6D9773] text-white",
  },
  {
    icon: Leaf,
    title: "Wellness Journal",
    description: "Mood, sleep & cycle tracking woven into your practice — quiet insight without the dashboards.",
    color: "bg-white border border-[#0A3B2C]/10 text-[#0A3B2C]",
  },
]

export default function IntelligencePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 max-w-3xl">
        <span className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase">
          Quiet Intelligence
        </span>
        <h1 className="font-serif-zf text-5xl md:text-6xl text-[#0A3B2C] mt-6 tracking-tight leading-[1.1]">
          Technology that <span className="italic">disappears</span>,<br />
          so the practice <span className="text-[#C5A059] italic">arrives</span>.
        </h1>
        <p className="text-[#64746B] text-lg mt-6 max-w-xl leading-relaxed">
          Our intelligence layer studies your sleep, mood, hormonal cycle and
          posture history to recommend the exact sequence your nervous system
          needs today. No noise. No notifications. Just the right practice, at
          the right moment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className={`${feature.color} p-8 flex flex-col justify-between min-h-[300px]`}
            >
              <Icon className="size-7" strokeWidth={1.2} />
              <div>
                <h3 className="font-serif-zf text-2xl mb-4 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-80">
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
