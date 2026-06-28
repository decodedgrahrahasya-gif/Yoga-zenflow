
"use client"

import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { submitEnquiry } from "@/redux/slices/enquiries/enquiriesThunk"
import { selectEnquiriesSubmitting } from "@/redux/slices/enquiries/enquiriesSlice"

export function Contact() {
  const dispatch = useAppDispatch()
  const submitting = useAppSelector(selectEnquiriesSubmitting)

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await dispatch(
      submitEnquiry({
        name: nameRef.current?.value ?? "",
        email: emailRef.current?.value ?? "",
        phone: phoneRef.current?.value ?? "",
        subject: subjectRef.current?.value ?? "",
        message: messageRef.current?.value ?? "",
      })
    )
    if (submitEnquiry.fulfilled.match(result)) {
      if (nameRef.current) nameRef.current.value = ""
      if (emailRef.current) emailRef.current.value = ""
      if (phoneRef.current) phoneRef.current.value = ""
      if (subjectRef.current) subjectRef.current.value = ""
      if (messageRef.current) messageRef.current.value = ""
    }
  }

  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 mb-16 border-t border-[#0A3B2C]/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
            Contact Us
          </p>
          <h2 className="font-serif-zf text-4xl md:text-5xl text-[#0A3B2C] tracking-tight mb-6">
            Let&apos;s begin your <span className="text-[#C5A059] italic">journey.</span>
          </h2>
          <p className="text-[#64746B] text-sm max-w-md mb-12">
            Whether you need help choosing a program, or have questions about our methodology,
            our concierge team is here to guide you.
          </p>
          <div className="space-y-8">
            <div>
              <p className="text-[#0A3B2C] font-serif-zf text-2xl mb-2">Studio</p>
              <p className="text-[#64746B] text-sm">
                124 Wellness Ave, Suite 300<br />San Francisco, CA 94110
              </p>
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

        <div className="bg-white p-8 md:p-10 border border-[#0A3B2C]/10 shadow-sm relative z-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 text-left relative">
                <label htmlFor="name" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  ref={nameRef}
                  className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-2 text-sm text-[#1A2520] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-[#64746B]/40"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2 text-left relative">
                <label htmlFor="email" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-2 text-sm text-[#1A2520] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-[#64746B]/40"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            <div className="space-y-2 text-left relative">
              <label htmlFor="phone" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">
                Contact No
              </label>
              <input
                type="tel"
                id="phone"
                ref={phoneRef}
                className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-2 text-sm text-[#1A2520] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-[#64746B]/40"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2 text-left relative">
              <label htmlFor="subject" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                ref={subjectRef}
                className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-2 text-sm text-[#1A2520] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-[#64746B]/40"
                placeholder="How can we help?"
              />
            </div>
            <div className="space-y-2 text-left relative">
              <label htmlFor="message" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                ref={messageRef}
                className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-2 text-sm text-[#1A2520] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-[#64746B]/40 resize-none"
                placeholder="Tell us more about your practice..."
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#0A3B2C] text-white py-4 text-sm font-medium hover:bg-[#072A1F] transition-colors group flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Send Message"} <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
