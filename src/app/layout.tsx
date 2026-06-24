import type { Metadata } from "next"
import { Poppins, Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  subsets: ["latin"],
})

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ZenFlow Yoga — Transform Your Mind, Body & Spirit",
  description:
    "Join live yoga classes, guided meditation sessions, and personalized wellness programs.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
