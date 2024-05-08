import { Button } from '@openui-org/react'
import Link from 'next/link'

const links = [
  { name: 'Docs', path: 'https://openui-org.gitbook.io/openui/' },
  { name: 'Components', path: '/' },
  { name: 'FAQ', path: '/' },
]

export default function Menu() {
  return (
    <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 rounded-none shadow-medium h-max bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="mr-4 block cursor-pointer font-bold leading-relaxed antialiased text-xl"
        >
          Open
          {' '}
          <b className="text-primary">UI</b>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden mr-4 lg:block">
            <nav className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {links.map((link, i) => (
                <Link key={i} href={link.path} className="block p-1 text-small font-medium antialiased">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-x-1">
            <Button className="bg-black hover:bg-black/80" rippleColor="light" asChild>
              <a href="https://github/com/OpenLab-dev/openui">
                Github
              </a>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="relative lg:hidden ml-auto">
            <span className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
