import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do I need my own mat and props?",
    answer: "Not at all. We provide mats, blocks, straps, and bolsters free of charge for all in-studio classes. Just show up in comfortable clothing. For online classes, a yoga mat is helpful but not required — a carpet or towel works too.",
  },
  {
    question: "I've never done yoga before. Where should I start?",
    answer: "Great question! We recommend starting with our Hatha Basics or Beginner Journey program. Both are designed for absolute beginners and move at a gentle pace. You can also book a free 15-minute orientation call with one of our instructors to find the right starting point.",
  },
  {
    question: "What if I can't make it to a class I booked?",
    answer: "We get it — life happens. You can cancel or reschedule up to 2 hours before class with no penalty. Late cancellations or no-shows on paid plans may count against your monthly class limit. Free trial users can rebook anytime.",
  },
  {
    question: "Is there parking near the studio?",
    answer: "Yes! Free street parking is available after 6pm on surrounding streets. Paid parking lots are on Mission St ($5/hour). We're also 2 blocks from the 24th St BART station and have bike racks out front.",
  },
  {
    question: "Can I attend classes online from anywhere?",
    answer: "Absolutely. All live classes stream via Zoom and are also recorded for on-demand access. You can join from anywhere in the world. Our on-demand library has 200+ classes available 24/7.",
  },
  {
    question: "What should I bring to my first class?",
    answer: "Just yourself! Wear comfortable clothing you can move in. We recommend bringing a water bottle. Arrive 10 minutes early if it's your first visit so we can show you around. We'll take care of the rest — mats, props, and a warm welcome.",
  },
  {
    question: "How do memberships work? Can I cancel anytime?",
    answer: "All memberships auto-renew monthly but you can cancel anytime from your account settings with no cancellation fees. Premium and Unlimited plans include a 30-day money-back guarantee if you're not satisfied. There are no long-term contracts.",
  },
  {
    question: "Do you offer classes for seniors or people with injuries?",
    answer: "Yes! Our chair yoga, restorative, and gentle flow classes are designed for all ages and abilities. Many of our instructors have specialized training in yoga therapy, trauma-informed practice, and working with injuries. Please let us know about any concerns before class so we can offer modifications.",
  },
]

export function FAQSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 border-t border-[#0A3B2C]/10">
      <div className="text-center mb-16">
        <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
          FAQ
        </p>
        <h2 className="font-serif-zf text-4xl md:text-5xl text-[#0A3B2C] tracking-tight">
          Everything you need to <span className="italic">know</span>
        </h2>
        <p className="text-[#64746B] text-sm max-w-xl mx-auto mt-4 leading-relaxed">
          Still have questions? We&apos;re here to help.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#0A3B2C]/10">
              <AccordionTrigger className="text-left text-sm font-medium text-[#0A3B2C] hover:text-[#C5A059] py-5 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#64746B] leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
