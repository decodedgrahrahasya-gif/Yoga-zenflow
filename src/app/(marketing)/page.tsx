import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles, Check, HeartPulse, Moon, Activity, Leaf } from "lucide-react"

export default function HomePage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen text-[#1A2520] font-sans-zf pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#C5A059]"></div>
              <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.2em] uppercase">
                Modern Yoga · Est. Calm
              </span>
            </div>
            
            <h1 className="font-serif-zf text-[72px] leading-[1.1] text-[#0A3B2C] mb-6 tracking-tight">
              Find your flow.<br/>
              <span className="text-[#C5A059] italic">Live your light.</span>
            </h1>
            
            <p className="text-[#64746B] text-lg mb-10 max-w-md leading-relaxed">
              ZenFlow is a premium, AI-guided yoga & wellness platform — built for the practitioner who treats breath, body and mind as a single ritual. Personalised programs. World-class teachers. Quietly intelligent technology.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link href="/pricing" className="bg-[#0A3B2C] text-white px-6 py-4 flex items-center text-sm font-medium hover:bg-[#072A1F] transition-colors">
                Start 14-day trial <ArrowUpRight className="ml-2 size-4" />
              </Link>
              <Link href="/classes" className="border border-[#0A3B2C]/20 text-[#0A3B2C] px-6 py-4 flex items-center text-sm font-medium hover:border-[#0A3B2C] transition-colors">
                Explore practice
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 border-t border-[#0A3B2C]/10 pt-8 max-w-md">
              <div>
                <p className="font-serif-zf text-3xl text-[#0A3B2C]">120k+</p>
                <p className="text-[11px] text-[#64746B] uppercase tracking-widest mt-1">Practitioners</p>
              </div>
              <div>
                <p className="font-serif-zf text-3xl text-[#0A3B2C]">48</p>
                <p className="text-[11px] text-[#64746B] uppercase tracking-widest mt-1">Master teachers</p>
              </div>
              <div>
                <p className="font-serif-zf text-3xl text-[#0A3B2C]">4.9</p>
                <p className="text-[11px] text-[#64746B] uppercase tracking-widest mt-1">App store rating</p>
              </div>
            </div>
          </div>

          {/* Right Image area */}
          <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop" 
                alt="Yoga Practice" 
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Top Right Floating Badge */}
            <div className="absolute top-6 right-6 bg-[#0A3B2C] text-white px-4 py-2 flex items-center gap-2 shadow-lg">
              <Sparkles className="size-3 text-[#C5A059]" />
              <span className="text-xs font-medium tracking-wide">AI-tuned for you</span>
            </div>
            
            {/* Bottom Left Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl max-w-[240px] border border-[#0A3B2C]/5">
              <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-3">Today's Intention</p>
              <p className="font-serif-zf text-xl text-[#0A3B2C] italic">
                "Soften the jaw. Open the breath."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="w-full bg-[#F5F2EB] py-4 border-y border-[#0A3B2C]/5 overflow-hidden mt-12 mb-24">
        <div className="flex animate-marquee text-[#64746B] font-serif-zf text-xl italic gap-12 whitespace-nowrap">
          <span>Vinyasa</span> <span className="text-[#C5A059]">♦</span>
          <span>Yin</span> <span className="text-[#C5A059]">♦</span>
          <span>Pranayama</span> <span className="text-[#C5A059]">♦</span>
          <span>Sound bath</span> <span className="text-[#C5A059]">♦</span>
          <span>Meditation</span> <span className="text-[#C5A059]">♦</span>
          <span>Restorative</span> <span className="text-[#C5A059]">♦</span>
          <span>Ashtanga</span> <span className="text-[#C5A059]">♦</span>
          <span>Vinyasa</span> <span className="text-[#C5A059]">♦</span>
          <span>Yin</span> <span className="text-[#C5A059]">♦</span>
          <span>Pranayama</span>
          <span className="text-[#C5A059]">♦</span>
          <span>Vinyasa</span> <span className="text-[#C5A059]">♦</span>
          <span>Yin</span> <span className="text-[#C5A059]">♦</span>
          <span>Pranayama</span> <span className="text-[#C5A059]">♦</span>
          <span>Sound bath</span> <span className="text-[#C5A059]">♦</span>
          <span>Meditation</span> <span className="text-[#C5A059]">♦</span>
          <span>Restorative</span> <span className="text-[#C5A059]">♦</span>
          <span>Ashtanga</span> <span className="text-[#C5A059]">♦</span>
          <span>Vinyasa</span> <span className="text-[#C5A059]">♦</span>
          <span>Yin</span> <span className="text-[#C5A059]">♦</span>
          <span>Pranayama</span>
        </div>
      </div>

      {/* 2. CURATED JOURNEYS SECTION */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 className="font-serif-zf text-5xl md:text-6xl text-[#0A3B2C] tracking-tight">
            Curated journeys, <span className="text-[#C5A059] italic">not</span> a content library.
          </h2>
          <Link href="/programs" className="group flex items-center text-sm font-medium hover:text-[#C5A059] transition-colors mt-6 md:mt-0 pb-2">
            View all 40 programs <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link href="/programs/foundations" className="bg-white p-6 shadow-sm border border-[#0A3B2C]/10 flex flex-col group cursor-pointer transition-shadow hover:shadow-md h-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-gray-100">
              <img src="https://images.unsplash.com/photo-1599439686001-f1ebfb7b952a?q=80&w=800&auto=format&fit=crop" alt="Yoga Studio" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex justify-between items-center text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
              <span>Foundations</span>
              <span>01</span>
            </div>
            <h3 className="font-serif-zf text-[28px] leading-tight mb-3 text-[#0A3B2C] font-medium tracking-tight">The Returning Breath</h3>
            <p className="text-sm text-[#64746B] mb-8 flex-grow leading-relaxed">
              A grounding return to the mat — pranayama, mobility and seated stillness.
            </p>
            <div className="flex justify-between items-center text-xs text-[#64746B] pt-5 border-t border-[#0A3B2C]/10">
              <span>21 days · 15 min/day</span>
              <ArrowUpRight className="size-4 text-[#C5A059]" />
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/programs/strength" className="bg-white p-6 shadow-sm border border-[#0A3B2C]/10 flex flex-col group cursor-pointer transition-shadow hover:shadow-md h-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-gray-100">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" alt="Yoga Pose" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex justify-between items-center text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
              <span>Strength</span>
              <span>02</span>
            </div>
            <h3 className="font-serif-zf text-[28px] leading-tight mb-3 text-[#0A3B2C] font-medium tracking-tight">Vinyasa, Slowly</h3>
            <p className="text-sm text-[#64746B] mb-8 flex-grow leading-relaxed">
              Build strength without urgency. A patient progression for sustainable power.
            </p>
            <div className="flex justify-between items-center text-xs text-[#64746B] pt-5 border-t border-[#0A3B2C]/10">
              <span>30 days · 30 min/day</span>
              <ArrowUpRight className="size-4 text-[#C5A059]" />
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/programs/restoration" className="bg-white p-6 shadow-sm border border-[#0A3B2C]/10 flex flex-col group cursor-pointer transition-shadow hover:shadow-md h-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-gray-100">
              <img src="https://images.unsplash.com/photo-1510843343460-705a698881ff?q=80&w=800&auto=format&fit=crop" alt="Nature Yoga" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex justify-between items-center text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
              <span>Restoration</span>
              <span>03</span>
            </div>
            <h3 className="font-serif-zf text-[28px] leading-tight mb-3 text-[#0A3B2C] font-medium tracking-tight">Sleep Like a River</h3>
            <p className="text-sm text-[#64746B] mb-8 flex-grow leading-relaxed">
              Yin, restorative and yoga nidra — for the over-stimulated nervous system.
            </p>
            <div className="flex justify-between items-center text-xs text-[#64746B] pt-5 border-t border-[#0A3B2C]/10">
              <span>14 days · 20 min/day</span>
              <ArrowUpRight className="size-4 text-[#C5A059]" />
            </div>
          </Link>
        </div>
      </section>

      {/* 3. INTELLIGENCE SECTION */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 border-t border-[#0A3B2C]/10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <h2 className="font-serif-zf text-5xl md:text-6xl text-[#0A3B2C] tracking-tight leading-[1.1]">
            Technology that <span className="italic">disappears</span>,<br/>
            so the practice <span className="text-[#C5A059] italic">arrives</span>.
          </h2>
          <div className="flex items-center">
            <p className="text-[#64746B] text-lg leading-relaxed max-w-lg">
              Our intelligence layer studies your sleep, mood, hormonal cycle and posture history to recommend the exact sequence your nervous system needs today. No noise. No notifications. Just the right practice, at the right moment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Large Image Card */}
          <div className="md:col-span-7 relative h-[400px] overflow-hidden group">
            <div className="absolute inset-0 bg-[#0A3B2C]">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" alt="Yoga in Nature" className="object-cover w-full h-full opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              <Sparkles className="size-6 text-[#C5A059]" />
              <div>
                <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-3">Adaptive Sequencing</p>
                <h3 className="font-serif-zf text-4xl text-white max-w-md leading-tight">Every flow rewritten the moment your body changes.</h3>
              </div>
            </div>
          </div>

          {/* Large Text Card */}
          <div className="md:col-span-5 bg-[#F5F2EB] p-8 flex flex-col justify-between h-[400px]">
            <HeartPulse className="size-6 text-[#0A3B2C]" />
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-3">Biometric Attunement</p>
              <h3 className="font-serif-zf text-3xl text-[#0A3B2C] leading-snug">Reads HRV, breath rate and stress markers — then softens or sharpens the practice in real-time.</h3>
            </div>
          </div>

          {/* Bottom 3 Small Cards */}
          <div className="md:col-span-4 bg-white border border-[#0A3B2C]/10 p-8 h-[240px] flex flex-col justify-between hover:shadow-sm transition-shadow">
            <Moon className="size-5 text-[#64746B]" />
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-3">Circadian Flows</p>
              <h3 className="font-serif-zf text-2xl text-[#0A3B2C]">Morning openers. Midday resets.</h3>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#6D9773] p-8 h-[240px] flex flex-col justify-between text-white shadow-inner">
            <Activity className="size-5 text-white/80" />
            <div>
              <p className="text-white/80 text-[10px] font-bold tracking-widest uppercase mb-3">Posture Vision</p>
              <h3 className="font-serif-zf text-2xl">Camera alignments to safely build your asanas.</h3>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#FDFBF7] border border-[#0A3B2C]/10 p-8 h-[240px] flex flex-col justify-between hover:shadow-sm transition-shadow">
            <Leaf className="size-5 text-[#64746B]" />
            <div>
              <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-3">Wellness Journal</p>
              <h3 className="font-serif-zf text-2xl text-[#0A3B2C]">Track emotional release after each flow.</h3>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MEMBERSHIP SECTION */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 mb-16 text-center border-t border-[#0A3B2C]/10">
        
        <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-6">
          06 — Membership
        </p>
        
        <h2 className="font-serif-zf text-5xl md:text-6xl text-[#0A3B2C] tracking-tight mb-6">
          Choose the rhythm of your <br/><span className="text-[#C5A059] italic">practice.</span>
        </h2>
        
        <p className="text-[#64746B] text-sm max-w-lg mx-auto mb-16">
          All tiers include unlimited devices, offline downloads, and our entire content library. Cancel anytime — the breath stays with you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto items-center">
          
          {/* Seeker Card */}
          <div className="bg-[#FDFBF7] border border-[#0A3B2C]/10 p-10 text-left relative z-0 h-[500px] flex flex-col justify-between">
            <div>
              <h3 className="font-serif-zf text-2xl text-[#0A3B2C] mb-8">Seeker</h3>
              <div className="mb-6">
                <span className="text-4xl text-[#0A3B2C]">Free</span>
              </div>
              <p className="text-xs text-[#64746B] mb-8 uppercase tracking-wide">14-day trial · no card</p>
              
              <ul className="space-y-4 mb-8">
                {['Daily morning flow', '5 foundational classes', 'Sleep meditations', 'Community circle'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-[#1A2520]">
                    <Check className="size-4 text-[#C5A059] mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <Link href="/sign-up" className="block w-full border border-[#0A3B2C]/20 text-center py-4 text-sm font-medium text-[#0A3B2C] hover:border-[#0A3B2C] transition-colors">
              Begin trial ↗
            </Link>
          </div>

          {/* Practitioner Card (Highlighted) */}
          <div className="bg-[#0A3B2C] p-10 text-left relative z-10 shadow-2xl h-[540px] flex flex-col justify-between -mx-2 md:scale-105">
            <div className="absolute top-8 right-8 border border-[#C5A059]/30 text-[#C5A059] text-[9px] uppercase tracking-widest px-3 py-1">
              Most Chosen
            </div>
            <div>
              <h3 className="font-serif-zf text-2xl text-white mb-8">Practitioner</h3>
              <div className="mb-6">
                <span className="text-5xl text-white">$24</span>
              </div>
              <p className="text-xs text-white/60 mb-8 uppercase tracking-wide">per month · billed annually</p>
              
              <ul className="space-y-4 mb-8">
                {['Unlimited classes & programs', 'AI-personalised sequencing', 'Biometric integrations', 'Live weekly sessions', 'Wellness journal & insights'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-white">
                    <Check className="size-4 text-[#C5A059] mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <Link href="/pricing" className="block w-full bg-[#C5A059] text-center py-4 text-sm font-medium text-white hover:bg-[#B38F46] transition-colors">
              Choose Practitioner ↗
            </Link>
          </div>

          {/* Devotee Card */}
          <div className="bg-[#FDFBF7] border border-[#0A3B2C]/10 p-10 text-left relative z-0 h-[500px] flex flex-col justify-between">
            <div>
              <h3 className="font-serif-zf text-2xl text-[#0A3B2C] mb-8">Devotee</h3>
              <div className="mb-6">
                <span className="text-4xl text-[#0A3B2C]">$58</span>
              </div>
              <p className="text-xs text-[#64746B] mb-8 uppercase tracking-wide">per month · 1:1 included</p>
              
              <ul className="space-y-4 mb-8">
                {['Everything in Practitioner', '2x monthly 1:1 with a master', 'Personal program design', 'Annual retreat priority', 'Concierge support'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-[#1A2520]">
                    <Check className="size-4 text-[#C5A059] mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <Link href="/pricing" className="block w-full border border-[#0A3B2C]/20 text-center py-4 text-sm font-medium text-[#0A3B2C] hover:border-[#0A3B2C] transition-colors">
              Choose Devotee ↗
            </Link>
          </div>

        </div>
      </section>

      {/* 5. CONTACT & ENQUIRY SECTION */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 mb-16 border-t border-[#0A3B2C]/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
              Contact Us
            </p>
            <h2 className="font-serif-zf text-4xl md:text-5xl text-[#0A3B2C] tracking-tight mb-6">
              Let's begin your <span className="text-[#C5A059] italic">journey.</span>
            </h2>
            <p className="text-[#64746B] text-sm max-w-md mb-12">
              Whether you need help choosing a program, or have questions about our methodology, our concierge team is here to guide you.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-[#0A3B2C] font-serif-zf text-2xl mb-2">Studio</p>
                <p className="text-[#64746B] text-sm">124 Wellness Ave, Suite 300<br/>San Francisco, CA 94110</p>
              </div>
              <div>
                <p className="text-[#0A3B2C] font-serif-zf text-2xl mb-2">General Enquiries</p>
                <p className="text-[#64746B] text-sm">hello@zenflow.yoga</p>
              </div>
              <div>
                <p className="text-[#0A3B2C] font-serif-zf text-2xl mb-2">Support Hours</p>
                <p className="text-[#64746B] text-sm">Mon - Fri: 8am - 6pm (PST)</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 border border-[#0A3B2C]/10 shadow-sm relative z-10">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 text-left relative">
                  <label htmlFor="name" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">Name</label>
                  <input type="text" id="name" className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-2 text-sm text-[#1A2520] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-[#64746B]/40" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2 text-left relative">
                  <label htmlFor="email" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">Email</label>
                  <input type="email" id="email" className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-2 text-sm text-[#1A2520] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-[#64746B]/40" placeholder="jane@example.com" />
                </div>
              </div>
              <div className="space-y-2 text-left relative">
                <label htmlFor="subject" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">Subject</label>
                <input type="text" id="subject" className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-2 text-sm text-[#1A2520] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-[#64746B]/40" placeholder="How can we help?" />
              </div>
              <div className="space-y-2 text-left relative">
                <label htmlFor="message" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">Message</label>
                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-2 text-sm text-[#1A2520] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-[#64746B]/40 resize-none" placeholder="Tell us more about your practice..."></textarea>
              </div>
              <div className="pt-4">
                <button type="button" className="w-full bg-[#0A3B2C] text-white py-4 text-sm font-medium hover:bg-[#072A1F] transition-colors group flex justify-center items-center">
                  Send Message <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  )
}
