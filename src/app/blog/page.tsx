import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import posts from "@/data/blog.json"

export const metadata = {
  title: "Journal — ZenFlow Yoga",
  description: "Wellness insights, yoga tips, and mindful living.",
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="font-serif-zf text-5xl text-[#0A3B2C] tracking-tight">
          Journal
        </h1>
        <p className="mt-4 text-[#64746B] max-w-2xl">
          Thoughts on practice, wellness, and living with intention.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group bg-white border border-[#0A3B2C]/10 flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="aspect-[16/9] bg-[#F5F2EB] flex items-center justify-center">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#C5A059]">
                {post.category}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="font-serif-zf text-xl text-[#0A3B2C] mb-3 group-hover:text-[#C5A059] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-[#64746B] mb-6 flex-grow leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-[#64746B] pt-4 border-t border-[#0A3B2C]/10">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {post.readTime} min read
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
