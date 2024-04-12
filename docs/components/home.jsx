export default function Home() {
  return (
    <section className="py-20 sm:py-24 relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div className="text-center relative z-[1]">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-balance">
            <b className="text-sky"> Open UI </b>
            . A modern design system
            built with
            <b className="text-sky"> Shadcn UI</b>
            {' '}
            and
            <b className="text-sky"> Tailwind CSS </b>
          </h1>
          <p className="mt-6 text-lg tracking-tight text-foreground text-pretty">
            Open UI is an open source design system with a completely
            cutting-edge system.
            {' '}
            <br />
            {' '}
            Fully customizable and modifiable you
            will make UI development much faster with fully stylized components.
          </p>
          {/* <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
            <Button>
              <ArrowUpRight className="size-6" />
              Get Started
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  )
}
