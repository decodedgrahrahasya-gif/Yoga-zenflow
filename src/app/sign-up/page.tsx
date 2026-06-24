import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "Sign Up — ZenFlow Yoga",
}

export default function SignUpPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="font-serif-zf text-4xl text-[#0A3B2C] tracking-tight mb-3">
          Begin your journey
        </h1>
        <p className="text-[#64746B] text-sm">
          14-day free trial. No credit card required.
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">First name</label>
            <input type="text" id="firstName" className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors" />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">Last name</label>
            <input type="text" id="lastName" className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">Email</label>
          <input type="email" id="email" className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors" placeholder="jane@example.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">Password</label>
          <input type="password" id="password" className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors" placeholder="Create a password" />
        </div>
        <button type="button" className="w-full bg-[#0A3B2C] text-white py-4 text-sm font-medium hover:bg-[#072A1F] transition-colors flex justify-center items-center">
          Start 14-day trial <ArrowUpRight className="ml-2 size-4" />
        </button>
      </form>

      <p className="text-center text-sm text-[#64746B] mt-8">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-[#C5A059] font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}
