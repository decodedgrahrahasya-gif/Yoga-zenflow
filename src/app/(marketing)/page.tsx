import { HeroSection } from "@/components/marketing/hero-section"
import { TrustBar } from "@/components/marketing/trust-bar"
import { WhoForSection } from "@/components/marketing/who-for-section"
import { BenefitsSection } from "@/components/marketing/benefits-section"
import { ClassesSection } from "@/components/marketing/classes-section"
import { OurPracticeSection } from "@/components/marketing/our-practice-section"
import { SchedulePreview } from "@/components/marketing/schedule-preview"
import { InstructorsSection } from "@/components/marketing/instructors-section"
import { TestimonialsSection } from "@/components/marketing/testimonials-section"
import { StudioSection } from "@/components/marketing/studio-section"
import { Membership } from "@/components/marketing/membership"
import { FAQSection } from "@/components/marketing/faq-section"
import { CTASection } from "@/components/marketing/cta-section"
import { Contact } from "@/components/marketing/contact"
import { StickyCTA } from "@/components/marketing/sticky-cta"

export default function HomePage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen text-[#1A2520] font-sans-zf">
      <HeroSection />
      <TrustBar />
      <WhoForSection />
      <BenefitsSection />
      <ClassesSection />
      <OurPracticeSection />
      <SchedulePreview />
      <InstructorsSection />
      <TestimonialsSection />
      <StudioSection />
      <Membership />
      <FAQSection />
      <Contact />
      <CTASection />
      <StickyCTA />
    </div>
  )
}
