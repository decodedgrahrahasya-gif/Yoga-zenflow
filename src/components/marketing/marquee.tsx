const items = [
  "Vinyasa", "Yin", "Pranayama", "Sound bath",
  "Meditation", "Restorative", "Ashtanga",
]

export function Marquee() {
  return (
    <div className="w-full bg-[#F5F2EB] py-4 border-y border-[#0A3B2C]/5 overflow-hidden mt-12 mb-24">
      <div className="flex animate-marquee text-[#64746B] font-serif-zf text-xl italic gap-12 whitespace-nowrap">
        {[...Array(3)].flatMap((_, groupIdx) =>
          items.map((item, i) => (
            <span key={`${groupIdx}-${i}`}>
              <span>{item}</span>
              {i < items.length - 1 && (
                <span className="text-[#C5A059] ml-12">♦</span>
              )}
            </span>
          ))
        )}
        <span className="text-[#C5A059]">♦</span>
      </div>
    </div>
  )
}
