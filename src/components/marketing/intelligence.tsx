import { Sparkles, HeartPulse, Moon, Activity, Leaf } from "lucide-react"

const tiles = [
  {
    icon: Sparkles,
    label: "Adaptive Sequencing",
    title: "Every flow rewritten the moment your body changes.",
    className: "md:col-span-7 relative h-[400px] overflow-hidden group bg-[#0A3B2C]",
    content: (
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
          alt="Yoga in Nature"
          className="object-cover w-full h-full opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    ),
    overlay: "absolute inset-0 p-8 flex flex-col justify-between z-10",
    iconColor: "text-[#C5A059]",
    labelClass: "text-[#C5A059]",
    titleClass: "font-serif-zf text-4xl text-white max-w-md leading-tight",
  },
  {
    icon: HeartPulse,
    label: "Biometric Attunement",
    title: "Reads HRV, breath rate and stress markers — then softens or sharpens the practice in real-time.",
    className: "md:col-span-5 bg-[#F5F2EB] p-8 flex flex-col justify-between h-[400px]",
    iconColor: "text-[#0A3B2C]",
    labelClass: "text-[#C5A059]",
    titleClass: "font-serif-zf text-3xl text-[#0A3B2C] leading-snug",
  },
  {
    icon: Moon,
    label: "Circadian Flows",
    title: "Morning openers. Midday resets.",
    className: "md:col-span-4 bg-white border border-[#0A3B2C]/10 p-8 h-[240px] flex flex-col justify-between hover:shadow-sm transition-shadow",
    iconColor: "text-[#64746B]",
    labelClass: "text-[#C5A059]",
    titleClass: "font-serif-zf text-2xl text-[#0A3B2C]",
  },
  {
    icon: Activity,
    label: "Posture Vision",
    title: "Camera alignments to safely build your asanas.",
    className: "md:col-span-4 bg-[#6D9773] p-8 h-[240px] flex flex-col justify-between text-white shadow-inner",
    iconColor: "text-white/80",
    labelClass: "text-white/80",
    titleClass: "font-serif-zf text-2xl",
  },
  {
    icon: Leaf,
    label: "Wellness Journal",
    title: "Track emotional release after each flow.",
    className: "md:col-span-4 bg-[#FDFBF7] border border-[#0A3B2C]/10 p-8 h-[240px] flex flex-col justify-between hover:shadow-sm transition-shadow",
    iconColor: "text-[#64746B]",
    labelClass: "text-[#C5A059]",
    titleClass: "font-serif-zf text-2xl text-[#0A3B2C]",
  },
]

export function Intelligence() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 border-t border-[#0A3B2C]/10 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <h2 className="font-serif-zf text-5xl md:text-6xl text-[#0A3B2C] tracking-tight leading-[1.1]">
          Technology that <span className="italic">disappears</span>,<br />
          so the practice <span className="text-[#C5A059] italic">arrives</span>.
        </h2>
        <div className="flex items-center">
          <p className="text-[#64746B] text-lg leading-relaxed max-w-lg">
            Our intelligence layer studies your sleep, mood, hormonal cycle and posture history to recommend
            the exact sequence your nervous system needs today. No noise. No notifications. Just the right
            practice, at the right moment.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {tiles.map((tile) => {
          const Icon = tile.icon
          return (
            <div key={tile.label} className={tile.className}>
              {tile.content}
              {tile.overlay ? (
                <div className={tile.overlay}>
                  <Icon className={`size-6 ${tile.iconColor}`} />
                  <div>
                    <p className={`${tile.labelClass} text-[10px] font-bold tracking-widest uppercase mb-3`}>
                      {tile.label}
                    </p>
                    <h3 className={tile.titleClass}>{tile.title}</h3>
                  </div>
                </div>
              ) : (
                <>
                  <Icon className={`size-6 ${tile.iconColor}`} />
                  <div>
                    <p className={`${tile.labelClass} text-[10px] font-bold tracking-widest uppercase mb-3`}>
                      {tile.label}
                    </p>
                    <h3 className={tile.titleClass}>{tile.title}</h3>
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
