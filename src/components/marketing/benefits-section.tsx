import { Moon, Heart, Sparkles, Activity } from "lucide-react"

const benefits = [
  {
    icon: Moon,
    title: "Sleep Better",
    description: "Evening restorative sequences and breathwork designed to activate your parasympathetic nervous system for deeper, more restful sleep.",
    stat: "83% of members report improved sleep within 2 weeks",
  },
  {
    icon: Heart,
    title: "Reduce Stress",
    description: "Science-backed yoga nidra and mindfulness practices that lower cortisol levels and quiet the mental chatter.",
    stat: "4.9 avg stress reduction rating across 500+ members",
  },
  {
    icon: Sparkles,
    title: "Improve Flexibility",
    description: "Progressive stretching protocols targeting hips, hamstrings, shoulders, and spine — at your own pace, never forced.",
    stat: "45% average flexibility improvement in 30 days",
  },
  {
    icon: Activity,
    title: "Build a Steady Routine",
    description: "Daily flows crafted around your schedule, with gentle accountability that turns practice into a sustainable habit.",
    stat: "90% member retention after 3 months",
  },
]

export function BenefitsSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 border-t border-[#0A3B2C]/10">
      <div className="text-center mb-16">
        <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
          Why ZenFlow
        </p>
        <h2 className="font-serif-zf text-4xl md:text-5xl text-[#0A3B2C] tracking-tight">
          Results you can <span className="italic">feel</span>
        </h2>
        <p className="text-[#64746B] text-sm max-w-xl mx-auto mt-4 leading-relaxed">
          Not just movement — measurable changes in how you sleep, think, and move through life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit) => {
          const Icon = benefit.icon
          return (
            <div
              key={benefit.title}
              className="bg-white border border-[#0A3B2C]/10 p-8 flex flex-col group hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 size-12 bg-[#F5F2EB] flex items-center justify-center rounded-sm">
                  <Icon className="size-5 text-[#0A3B2C]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif-zf text-xl md:text-2xl text-[#0A3B2C] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#64746B] leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <p className="text-xs text-[#C5A059] font-medium italic">
                    {benefit.stat}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
