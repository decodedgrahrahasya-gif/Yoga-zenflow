"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, Menu, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Practice", href: "/practice" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "Teachers", href: "/teachers" },
  { label: "Membership", href: "/membership" },
  { label: "Journal", href: "/journal" },
]

function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/80 shadow-sm backdrop-blur-lg"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif-zf text-2xl font-medium tracking-tight text-[#1A2520]">ZenFlow <span className="font-sans-zf text-[10px] tracking-widest text-[#C5A059] uppercase ml-1">YOGA</span></span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" render={<Link href="/sign-in" />}>
            Sign in
          </Button>
          <Button className="bg-[#0A3B2C] text-white hover:bg-[#072A1F] rounded-none" render={<Link href="/pricing" />}>
            Begin trial <ArrowUpRight className="ml-1 size-4" />
          </Button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Toggle menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-lg font-medium transition-colors hover:bg-muted",
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-border" />
              <Button variant="ghost" className="justify-start" render={<Link href="/sign-in" onClick={() => setMobileOpen(false)} />}>
                Sign In
              </Button>
              <Button className="justify-start" render={<Link href="/pricing" onClick={() => setMobileOpen(false)} />}>
                Start Free Trial
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export { Navbar }
