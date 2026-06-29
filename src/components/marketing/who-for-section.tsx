import { Flower2, Briefcase, Heart, Brain, Users } from "lucide-react"

const audiences = [
  {
    icon: Flower2,
    title: "Complete Beginners",
    description: "Never touched a mat? Our foundations program eases you in with patient, step-by-step guidance.",
    color: "bg-[#0A3B2C] text-white",
    iconBg: "text-[#C5A059]",
  },
  {
    icon: Briefcase,
    title: "Busy Professionals",
    description: "Short 15–30 minute flows designed to fit around your schedule. Stress relief that works before or after work.",
    color: "bg-[#F5F2EB] text-[#0A3B2C]",
    iconBg: "text-[#0A3B2C]",
  },
  {
    icon: Heart,
    title: "Stress Relief Seekers",
    description: "Restorative yoga, breathwork, and meditation sequences proven to lower cortisol and calm the nervous system.",
    color: "bg-[#FDFBF7] text-[#0A3B2C] border border-[#0A3B2C]/10",
    iconBg: "text-[#C5A059]",
  },
  {
    icon: Users,
    title: "Seniors & Gentle Practice",
    description: "Chair yoga, gentle flows, and accessible poses that build mobility and balance at any age or ability.",
    color: "bg-[#6D9773] text-white",
    iconBg: "text-white/80",
  },
  {
    icon: Brain,
    title: "Advanced Practitioners",
    description: "Challenging Ashtanga, Power Yoga, and arm balance workshops for experienced yogis ready to deepen their practice.",
    color: "bg-[#0A3B2C] text-white",
    iconBg: "text-[#C5A059]",
  },
]

export function WhoForSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
          Who It&apos;s For
        </p>
        <h2 className="font-serif-zf text-4xl md:text-5xl text-[#0A3B2C] tracking-tight">
          Yoga for <span className="italic">every body</span>
        </h2>
        <p className="text-[#64746B] text-sm max-w-xl mx-auto mt-4 leading-relaxed">
          Whether you&apos;re taking your first breath on the mat or refining a handstand,
          there&apos;s a practice waiting for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {audiences.map((audience, i) => {
          const Icon = audience.icon
          const isLarge = i === 2
          return (
            <div
              key={audience.title}
              className={`${audience.color} p-8 flex flex-col ${isLarge ? "md:col-span-3 md:grid md:grid-cols-3 md:gap-8 md:items-center" : ""} rounded-sm transition-shadow hover:shadow-lg`}
            >
              <div className={isLarge ? "md:col-span-1" : ""}>
                <Icon className={`size-8 ${audience.iconBg} mb-4`} strokeWidth={1.2} />
              </div>
              <div className={isLarge ? "md:col-span-2" : ""}>
                <h3 className={`font-serif-zf text-xl md:text-2xl mb-3 ${audience.color.includes("text-white") ? "text-white" : "text-[#0A3B2C]"}`}>
                  {audience.title}
                </h3>
                <p className={`text-sm leading-relaxed ${audience.color.includes("text-white") ? "text-white/80" : "text-[#64746B]"}`}>
                  {audience.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
