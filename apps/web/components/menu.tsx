import { Button } from '@openui-org/react'
import Link from 'next/link'
import { DocsSearch } from './docs-search'
import { Icons } from './icons'

const links = [
  { name: 'Documentation', path: '/docs/getting-started/introduction' },
  { name: 'FAQ', path: '/faq' },
]

export default function Menu() {
  return (
    <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 rounded-none shadow-large h-max bg-white lg:px-8 lg:py-4">
      <div className="flex items-center gap-x-6 justify-between">
        <div className="flex items-center gap-x-8">
          <Link
            href="/"
            className="mr-4 block cursor-pointer font-bold leading-relaxed antialiased text-2xl"
          >
            Open
            {' '}
            <b>UI</b>
          </Link>
          <div className="hidden mr-4 lg:block">
            <nav className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
              {links.map((link, i) => (
                <Link key={i} href={link.path} className="p-1 text-small hover:text-black/80">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-4">

            <DocsSearch />
            <div className="flex items-center gap-x-1">
              <Button asChild variant="ghost" size="icon">
                <Link href="https://github.com/Open-Lab-dev/openui">
                  <Icons.GitHub className="size-6" />
                </Link>
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
      </div>
    </nav>
  )
}
