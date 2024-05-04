import { Button } from '@openui-org/react'
import Link from 'next/link'

const links = [
  { name: 'Docs', path: '/' },
  { name: 'Components', path: '/' },
  { name: 'FAQ', path: '/' },
]

export default function Menu() {
  return (
    <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 rounded-none shadow-medium h-max bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between">
        <Link
          href="#"
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
            <Button>
              Github
            </Button>
          </div>
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
          </button>
        </div>
      </div>
    </nav>
  )
}
