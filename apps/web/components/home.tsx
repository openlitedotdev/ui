import { Badge, Button } from '@openui-org/react'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Badge color="none" outline="primary">Open UI is available 🎉</Badge>
        <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl">
          Open UI. A modern design system built with Shadcn UI and Tailwind CSS.
        </h1>
        <p className="max-w-[42rem] text-small">
          Open UI is an open source design system with a completely cutting-edge system. Fully customizable and modifiable you will make UI development much faster with fully stylized components.
        </p>
        <div className="space-x-4 mt-4">
          <Button asChild color="primary" size="lg" className="bg-black hover:bg-black/80" rippleColor="light">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild color="ghost" size="lg" className="border">
            <Link href="/https://github.com/OpenLab-dev" target="_blank">Github</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
