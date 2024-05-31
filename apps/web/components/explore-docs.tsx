import { Button } from '@openlabs/ui'
import Link from 'next/link'
import { cn } from '@openlabs/theme'
import Title from './title'

export default function ExploreDocs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex flex-col items-center justify-center">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <Title className={cn('text-start')}>

            Get Started with Open UI Design System
          </Title>

          <p className="max-w-[600px] lg:text-base/relaxed">
            Explore our comprehensive documentation and start building your next project with our design system.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
          <Button asChild className="bg-default hover:bg-default/80 text-foreground" ripple>
            <Link href="/docs/getting-started">Explore Documentation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
