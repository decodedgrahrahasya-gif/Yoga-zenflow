import Link from "next/link"
import { Check, ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "Pricing — ZenFlow Yoga",
  description: "Choose the plan that fits your wellness journey.",
}

const plans = [
  {
    name: "Seeker",
    price: "Free",
    period: "14-day trial · no card",
    features: [
      "Daily morning flow",
      "5 foundational classes",
      "Sleep meditations",
      "Community circle",
    ],
    cta: "Begin trial",
    highlighted: false,
  },
  {
    name: "Practitioner",
    price: "$24",
    period: "per month · billed annually",
    features: [
      "Unlimited classes & programs",
      "AI-personalised sequencing",
      "Biometric integrations",
      "Live weekly sessions",
      "Wellness journal & insights",
    ],
    cta: "Choose Practitioner",
    highlighted: true,
  },
  {
    name: "Devotee",
    price: "$58",
    period: "per month · 1:1 included",
    features: [
      "Everything in Practitioner",
      "2x monthly 1:1 with a master",
      "Personal program design",
      "Annual retreat priority",
      "Concierge support",
    ],
    cta: "Choose Devotee",
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center">
      <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-6">
        Membership
      </p>
      <h1 className="font-serif-zf text-5xl text-[#0A3B2C] tracking-tight mb-6">
        Choose the rhythm of your <span className="text-[#C5A059] italic">practice.</span>
      </h1>
      <p className="text-[#64746B] text-sm max-w-lg mx-auto mb-16">
        All tiers include unlimited devices, offline downloads, and our entire
        content library. Cancel anytime.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto items-center">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={
              plan.highlighted
                ? "bg-[#0A3B2C] p-10 text-left relative z-10 shadow-2xl flex flex-col justify-between md:scale-105"
                : "bg-[#FDFBF7] border border-[#0A3B2C]/10 p-10 text-left relative z-0 flex flex-col justify-between"
            }
          >
            {plan.highlighted && (
              <div className="absolute top-8 right-8 border border-[#C5A059]/30 text-[#C5A059] text-[9px] uppercase tracking-widest px-3 py-1">
                Most Chosen
              </div>
            )}
            <div>
              <h3
                className={`font-serif-zf text-2xl mb-8 ${
                  plan.highlighted ? "text-white" : "text-[#0A3B2C]"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mb-6">
                <span
                  className={`text-4xl ${
                    plan.highlighted ? "text-white" : "text-[#0A3B2C]"
                  }`}
                >
                  {plan.price}
                </span>
              </div>
              <p
                className={`text-xs mb-8 uppercase tracking-wide ${
                  plan.highlighted ? "text-white/60" : "text-[#64746B]"
                }`}
              >
                {plan.period}
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center text-sm ${
                      plan.highlighted ? "text-white" : "text-[#1A2520]"
                    }`}
                  >
                    <Check className="size-4 text-[#C5A059] mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/sign-up"
              className={
                plan.highlighted
                  ? "block w-full bg-[#C5A059] text-center py-4 text-sm font-medium text-white hover:bg-[#B38F46] transition-colors"
                  : "block w-full border border-[#0A3B2C]/20 text-center py-4 text-sm font-medium text-[#0A3B2C] hover:border-[#0A3B2C] transition-colors"
              }
            >
              {plan.cta} <ArrowUpRight className="inline size-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
