import { Button } from '@openui-org/react'
import Link from 'next/link'

export default function ExploreDocs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex flex-col items-center justify-center">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Get Started with Open UI Design System
          </h2>
          <p className="max-w-[600px] lg:text-base/relaxed">
            Explore our comprehensive documentation and start building your next project with our design system.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
          <Button asChild>
            <Link href="#">Explore Documentation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
