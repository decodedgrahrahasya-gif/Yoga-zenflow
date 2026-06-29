const styles = [
  {
    name: "Hatha",
    sanskrit: "Ha — Sun, Tha — Moon",
    description: "Gentle foundations. Slow-paced poses held with awareness. Perfect for learning alignment and breath coordination.",
    bestFor: "Beginners, alignment seekers",
    intensity: "Low",
    duration: "45–60 min",
  },
  {
    name: "Vinyasa",
    sanskrit: "Nyasa — To Place",
    description: "Breath-linked movement that flows from pose to pose. A moving meditation that builds heat and focus.",
    bestFor: "Dynamic flow lovers, cardio",
    intensity: "Moderate",
    duration: "30–60 min",
  },
  {
    name: "Ashtanga",
    sanskrit: "Asta — Eight, Anga — Limb",
    description: "Traditional sequence of postures practiced in Mysore style. Builds discipline, strength, and mental clarity.",
    bestFor: "Structure seekers, discipline",
    intensity: "High",
    duration: "60–90 min",
  },
  {
    name: "Kundalini",
    sanskrit: "Kundala — Coiled",
    description: "Dynamic breathwork, mantra, and movement to awaken energy. A powerful practice for emotional release.",
    bestFor: "Energy work, spiritual practice",
    intensity: "Moderate–High",
    duration: "45–75 min",
  },
  {
    name: "Yin",
    sanskrit: "Yin — Stillness",
    description: "Long-held passive poses targeting deep connective tissue. A meditative practice for flexibility and patience.",
    bestFor: "Deep stretch, recovery, stress relief",
    intensity: "Low",
    duration: "30–60 min",
  },
  {
    name: "Meditation",
    sanskrit: "Dhyana — Absorption",
    description: "Guided mindfulness, breath awareness, and body scan practices. Cultivates inner stillness and emotional regulation.",
    bestFor: "Mental clarity, anxiety relief",
    intensity: "Restorative",
    duration: "15–45 min",
  },
]

export function OurPracticeSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 border-t border-[#0A3B2C]/10">
      <div className="mb-16">
        <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
          Our Practice
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <h2 className="font-serif-zf text-4xl md:text-5xl text-[#0A3B2C] tracking-tight">
            Six paths. One <span className="italic">destination.</span>
          </h2>
          <p className="text-[#64746B] text-sm leading-relaxed max-w-md">
            Each style serves a different need. Whether you&apos;re here to stretch, sweat, or sit in stillness —
            find the practice that speaks to where you are today.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {styles.map((style) => (
          <div
            key={style.name}
            className="bg-white border border-[#0A3B2C]/10 p-6 flex flex-col hover:border-[#C5A059]/30 transition-all hover:shadow-md group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-serif-zf text-xl text-[#0A3B2C]">{style.name}</h3>
                <p className="text-xs text-[#64746B] italic mt-0.5">{style.sanskrit}</p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] px-2.5 py-1 bg-[#F5F2EB] rounded-sm shrink-0">
                {style.intensity}
              </span>
            </div>
            <p className="text-sm text-[#64746B] leading-relaxed flex-grow mb-4">
              {style.description}
            </p>
            <div className="pt-4 border-t border-[#0A3B2C]/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#64746B]">Best for</span>
                <span className="text-[#0A3B2C] font-medium">{style.bestFor}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#64746B]">Duration</span>
                <span className="text-[#0A3B2C] font-medium">{style.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
