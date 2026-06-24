import { ClassBrowser } from "@/components/classes/class-browser"

export const metadata = {
  title: "Classes — ZenFlow Yoga",
  description: "Browse our library of live and recorded yoga classes.",
}

export default function ClassesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="font-serif-zf text-5xl text-[#0A3B2C] tracking-tight">
          Explore classes
        </h1>
        <p className="mt-4 text-[#64746B] max-w-2xl">
          Filter by style, duration, difficulty, or instructor. Every class
          is designed to meet you where you are.
        </p>
      </div>
      <ClassBrowser />
    </div>
  )
}
