import { Badge, Button } from '@openui-org/react'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Badge color="none" outline="primary">Open UI is available 🎉</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">
          Open UI. A modern design system built with Shadcn UI and Tailwind CSS.
        </h1>
        <p className="mt-4 font-normal text-base max-w-lg text-center mx-auto">
          Open UI is an open source design system with a completely cutting-edge system. Fully customizable and modifiable you will make UI development much faster with fully stylized components.
        </p>
        <div className="space-x-4 mt-4">
          <Button asChild color="primary" size="lg" className="bg-default hover:bg-default/80 text-foreground" rippleColor="light">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild color="ghost" size="lg" className="border border-default hover:bg-default/10">
            <Link href="/https://github.com/OpenLab-dev" target="_blank">Github</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
