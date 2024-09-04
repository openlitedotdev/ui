import { Button } from '@openlite/ui'
import InstallCommand from '../install-command'

export function Presentation() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              A design system built
              {' '}
              <br />
              {' '}
              with Tailwindcss and Radix UI.
            </h1>
            <p className="mx-auto max-w-[700px] text-neutral-500 text-sm">
              Our design system provides a complete set of guidelines, components, and tools to help you create cohesive and stunning user interfaces. Take a look at our documentation and use the established layouts.
            </p>
          </div>
          <div className="flex items-center gap-x-5 flex-wrap">
            <Button>Getting started</Button>
            <InstallCommand />
          </div>
        </div>
      </div>
    </section>
  )
}
