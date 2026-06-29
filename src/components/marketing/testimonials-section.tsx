const testimonials = [
  {
    quote: "I came to ZenFlow after years of chronic back pain from sitting at a desk. Within three months, my posture had transformed and the morning stiffness was gone. The instructors taught me how to listen to my body instead of fighting it.",
    author: "Amanda K.",
    role: "Software Engineer · Member since 2022",
    beforeAfter: "From chronic back pain to pain-free daily movement",
    rating: 5,
  },
  {
    quote: "I was skeptical about online yoga — I thought you needed a studio to really practice. But the live classes here are so interactive that I forget I'm at home. Priya's alignment cues are incredibly precise. I've progressed faster than I ever did in-person.",
    author: "James R.",
    role: "Teacher · Member since 2023",
    beforeAfter: "From skeptical beginner to confident daily practitioner",
    rating: 5,
  },
  {
    quote: "After my divorce, anxiety was controlling my life. The meditation and restorative programs gave me tools that therapy alone couldn't. The community here held space for me without judgment. I'm not the same person I was a year ago — I'm calmer, stronger, and more myself.",
    author: "Maya L.",
    role: "Graphic Designer · Member since 2021",
    beforeAfter: "From anxiety to inner peace and emotional resilience",
    rating: 5,
  },
  {
    quote: "As a former athlete, I was looking for a practice that would challenge me physically while also helping me recover. The Power Yoga and Yin combination is exactly what I needed. Jake's classes push me hard, and the Yin sessions on rest days keep me balanced.",
    author: "David K.",
    role: "Fitness Coach · Member since 2022",
    beforeAfter: "From burnout to balanced strength and recovery",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 border-t border-[#0A3B2C]/10">
      <div className="text-center mb-16">
        <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
          Community Stories
        </p>
        <h2 className="font-serif-zf text-4xl md:text-5xl text-[#0A3B2C] tracking-tight">
          Real <span className="italic">transformations</span>
        </h2>
        <p className="text-[#64746B] text-sm max-w-xl mx-auto mt-4 leading-relaxed">
          Not just what people say — what changed for them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.author}
            className="bg-white border border-[#0A3B2C]/10 p-8 flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-[#C5A059] text-sm">★</span>
              ))}
            </div>

            <blockquote className="text-sm text-[#64746B] leading-relaxed flex-grow mb-6 italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-[#0A3B2C]/10">
              <p className="text-sm font-medium text-[#0A3B2C]">{t.author}</p>
              <p className="text-xs text-[#64746B] mt-0.5">{t.role}</p>
              <div className="mt-2 inline-block bg-[#F5F2EB] text-[#0A3B2C] text-[10px] font-medium px-2.5 py-1 rounded-sm">
                {t.beforeAfter}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
