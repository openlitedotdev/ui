import { Button } from '@openui-org/react'
import Link from 'next/link'

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Built with Love and Inspiration
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 text-base">
            Open UI. design system built on the basis of the existing ones, however we are constantly improving the design and components.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex space-x-2">
            <input
              className="max-w-lg flex-1 outline-none p-1 rounded-small border-small border-black/50"
              placeholder="Send your feedback"
              type="text"
            />
            <Button type="submit">Send</Button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Send us your ideas to build a better design system.
            <Link
              className="underline underline-offset-2 pl-1"
              href="/faq"
            >
              FAQ
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
