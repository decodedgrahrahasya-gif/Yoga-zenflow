import { HeroSection } from "@/components/marketing/hero-section"
import { Marquee } from "@/components/marketing/marquee"
import { CuratedJourneys } from "@/components/marketing/curated-journeys"
import { Intelligence } from "@/components/marketing/intelligence"
import { Membership } from "@/components/marketing/membership"
import { Contact } from "@/components/marketing/contact"

export default function HomePage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen text-[#1A2520] font-sans-zf">
      <HeroSection />
      <Marquee />
      <CuratedJourneys />
      <Intelligence />
      <Membership />
      <Contact />
    </div>
  )
}
