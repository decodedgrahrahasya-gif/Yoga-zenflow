import Image from "next/image"
import { MapPin, Car, DoorOpen, Accessibility, Waves, Clock } from "lucide-react"

const details = [
  {
    icon: MapPin,
    label: "Location",
    value: "124 Wellness Ave, San Francisco, CA 94110\n2 blocks from 24th St BART station",
  },
  {
    icon: Car,
    label: "Parking",
    value: "Free street parking available after 6pm. Paid lots on Mission St ($5/hr). Bike racks out front.",
  },
  {
    icon: DoorOpen,
    label: "Changing Rooms",
    value: "Spacious changing areas with lockers (bring your own lock). Showers with towels and toiletries provided.",
  },
  {
    icon: Waves,
    label: "Amenities",
    value: "Mats, blocks, straps, and bolsters available free. Tea bar with herbal selections. Retail shop for props and apparel.",
  },
  {
    icon: Accessibility,
    label: "Accessibility",
    value: "Ground-floor entry, wide doorways, accessible restroom. Let us know if you need additional accommodations.",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 6am – 9pm\nSat–Sun: 7am – 7pm\nFirst class free on your birthday!",
  },
]

export function StudioSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 border-t border-[#0A3B2C]/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
            Our Studio
          </p>
          <h2 className="font-serif-zf text-4xl md:text-5xl text-[#0A3B2C] tracking-tight mb-6">
            A sanctuary in the <span className="italic">heart of the Mission</span>
          </h2>
          <p className="text-[#64746B] text-sm leading-relaxed mb-10">
            Our flagship San Francisco studio combines natural light, sustainable materials, and
            thoughtful design to create a space where practice deepens naturally. High ceilings,
            bamboo floors, and a quiet garden terrace for post-practice tea.
          </p>

          <div className="space-y-5">
            {details.map((detail) => {
              const Icon = detail.icon
              return (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="shrink-0 size-10 bg-[#F5F2EB] flex items-center justify-center rounded-sm">
                    <Icon className="size-4 text-[#0A3B2C]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0A3B2C] uppercase tracking-wider mb-0.5">
                      {detail.label}
                    </p>
                    <p className="text-sm text-[#64746B] leading-relaxed whitespace-pre-line">
                      {detail.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#0A3B2C]/10 bg-[#F5F2EB]">
            <Image
              src="https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=1200&q=80"
              alt="Sunlit ZenFlow yoga studio interior with natural light, hardwood floors, and peaceful atmosphere"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A3B2C]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-serif-zf text-xl text-white">ZenFlow Studio</p>
              <p className="text-sm text-white/80">124 Wellness Ave · San Francisco</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-3">
            <div className="relative aspect-square overflow-hidden border border-[#0A3B2C]/10 bg-[#FDFBF7] group">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80"
                alt="Students practicing yoga together in a group class at ZenFlow studio"
                fill
                sizes="(max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3B2C]/40 to-transparent" />
              <span className="absolute bottom-2 left-2 text-[10px] text-white font-medium">
                Practice space
              </span>
            </div>
            <div className="relative aspect-square overflow-hidden border border-[#0A3B2C]/10 bg-[#FDFBF7] group">
              <Image
                src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&w=600&q=80"
                alt="Peaceful yoga practice with props and natural lighting at ZenFlow"
                fill
                sizes="(max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3B2C]/40 to-transparent" />
              <span className="absolute bottom-2 left-2 text-[10px] text-white font-medium">
                Restorative area
              </span>
            </div>
            <div className="relative aspect-square overflow-hidden border border-[#0A3B2C]/10 bg-[#FDFBF7] group">
              <Image
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=600&q=80"
                alt="Yoga props, mats, and blocks available at ZenFlow studio"
                fill
                sizes="(max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3B2C]/40 to-transparent" />
              <span className="absolute bottom-2 left-2 text-[10px] text-white font-medium">
                Props & tea bar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
