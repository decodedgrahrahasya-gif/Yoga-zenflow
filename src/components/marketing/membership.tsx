import Link from "next/link"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free Trial",
    bestFor: "Best for: first-timers",
    price: "$0",
    period: "first class free · no card",
    href: "/classes",
    cta: "Book your free class ↗",
    ctaClass: "border border-[#0A3B2C]/20 text-[#0A3B2C] hover:border-[#0A3B2C]",
    featured: false,
    features: ["1 free class", "Full studio access", "Mats & props provided", "No credit card required"],
  },
  {
    name: "Premium",
    bestFor: "Best for: regular practitioners",
    price: "$39",
    period: "per month · save 30% vs drop-in",
    href: "/pricing",
    cta: "Choose Premium ↗",
    ctaClass: "bg-[#C5A059] text-white hover:bg-[#B38F46]",
    featured: true,
    features: [
      "Unlimited live classes",
      "200+ on-demand classes",
      "Progress tracking",
      "Private community groups",
      "Workshop discounts",
    ],
  },
  {
    name: "Unlimited",
    bestFor: "Best for: dedicated practitioners · save 40%",
    price: "$69",
    period: "per month · 1:1 included",
    href: "/pricing",
    cta: "Choose Unlimited ↗",
    ctaClass: "border border-[#0A3B2C]/20 text-[#0A3B2C] hover:border-[#0A3B2C]",
    featured: false,
    features: [
      "Everything in Premium",
      "Monthly 1-on-1 coaching",
      "In-studio access",
      "Exclusive workshops",
      "Nutrition & wellness plans",
    ],
  },
]

export function Membership() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 mb-16 text-center border-t border-[#0A3B2C]/10">
      <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-6">
        06 — Membership
      </p>
      <h2 className="font-serif-zf text-5xl md:text-6xl text-[#0A3B2C] tracking-tight mb-6">
        Choose the rhythm of your <br /><span className="text-[#C5A059] italic">practice.</span>
      </h2>
      <p className="text-[#64746B] text-sm max-w-lg mx-auto mb-16">
        All tiers include unlimited devices, offline downloads, and our entire content library.
        Cancel anytime — the breath stays with you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto items-center">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={
              plan.featured
                ? "bg-[#0A3B2C] p-10 text-left relative z-10 shadow-2xl h-[540px] flex flex-col justify-between -mx-2 md:scale-105"
                : "bg-[#FDFBF7] border border-[#0A3B2C]/10 p-10 text-left relative z-0 h-[500px] flex flex-col justify-between"
            }
          >
            {plan.featured && (
              <div className="absolute top-8 right-8 border border-[#C5A059]/30 text-[#C5A059] text-[9px] uppercase tracking-widest px-3 py-1">
                Most Popular
              </div>
            )}
            <div>
              <h3 className={`font-serif-zf text-2xl mb-1 ${plan.featured ? "text-white" : "text-[#0A3B2C]"}`}>
                {plan.name}
              </h3>
              <p className={`text-[10px] tracking-wider uppercase mb-8 ${plan.featured ? "text-[#C5A059]/80" : "text-[#C5A059]"}`}>
                {plan.bestFor}
              </p>
              <div className="mb-6">
                <span className={`${plan.featured ? "text-5xl text-white" : "text-4xl text-[#0A3B2C]"}`}>
                  {plan.price}
                </span>
              </div>
              <p className="text-xs text-[#64746B] mb-8 uppercase tracking-wide">{plan.period}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-center text-sm ${plan.featured ? "text-white" : "text-[#1A2520]"}`}>
                    <Check className="size-4 text-[#C5A059] mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link href={plan.href} className={`block w-full text-center py-4 text-sm font-medium transition-colors ${plan.ctaClass}`}>
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
