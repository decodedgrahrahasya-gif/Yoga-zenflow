export function TrustBar() {
  const metrics = [
    { value: "500+", label: "Active Members" },
    { value: "4.9", label: "Average Rating" },
    { value: "Yoga Alliance", label: "Certified Teachers" },
    { value: "7 Days", label: "Classes Every Week" },
  ]

  return (
    <section className="w-full bg-[#0A3B2C] py-10 md:py-14">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="font-serif-zf text-2xl md:text-3xl text-white tracking-tight">
                {metric.value}
              </p>
              <p className="text-[#C5A059] text-xs md:text-sm tracking-wider mt-1.5 uppercase font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
