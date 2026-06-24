import Link from "next/link"
import { Globe, Image, MessageCircle, Play } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  platform: [
    { label: "Classes", href: "/classes" },
    { label: "Programs", href: "/programs" },
    { label: "Pricing", href: "/pricing" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

function Footer() {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-heading text-xl font-semibold">
                ZenFlow
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Transform Your Mind, Body & Spirit
            </p>
            <div className="flex items-center gap-3">
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Globe className="size-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Image className="size-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <MessageCircle className="size-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Play className="size-5" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold">
              Platform
            </h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <p className="text-center text-sm text-primary-foreground/60">
          &copy; 2026 ZenFlow Yoga. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export { Footer }
