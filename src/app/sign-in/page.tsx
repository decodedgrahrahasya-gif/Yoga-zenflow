import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "Sign In — ZenFlow Yoga",
}

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="font-serif-zf text-4xl text-[#0A3B2C] tracking-tight mb-3">
          Welcome back
        </h1>
        <p className="text-[#64746B] text-sm">
          Sign in to continue your practice.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">Email</label>
          <input type="email" id="email" className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors" placeholder="jane@example.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-[10px] font-bold text-[#1A2520] uppercase tracking-widest">Password</label>
          <input type="password" id="password" className="w-full bg-transparent border-b border-[#0A3B2C]/20 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors" placeholder="••••••••" />
        </div>
        <button type="button" className="w-full bg-[#0A3B2C] text-white py-4 text-sm font-medium hover:bg-[#072A1F] transition-colors flex justify-center items-center">
          Sign in <ArrowUpRight className="ml-2 size-4" />
        </button>
      </form>

      <p className="text-center text-sm text-[#64746B] mt-8">
        No account yet?{" "}
        <Link href="/sign-up" className="text-[#C5A059] font-medium hover:underline">
          Create one
        </Link>
      </p>
    </div>
  )
}
