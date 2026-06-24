"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function NewsletterForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-lg rounded-2xl bg-muted/50 p-8 text-center sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-2xl font-bold">
            Join Our Newsletter
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Get weekly wellness tips, class updates, and exclusive offers
            delivered to your inbox.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export { NewsletterForm }
