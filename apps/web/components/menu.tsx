'use client'
import { Button } from '@openui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DocsSearch } from './docs-search'
import { Icons } from './icons'
import MobileSidebar from './mobile-sidebar'
import { DarkMode } from './dark-mode'

const links = [
  { name: 'Documentation', path: '/docs/getting-started/introduction' },
  { name: 'FAQ', path: '/faq' },
]

export default function Menu() {
  const pathname = usePathname()
  return (
    <>
      {pathname.startsWith('/docs') && (
        <aside className="bg-yellow-600 py-1">
          <small className="text-white font-medium text-center block text-lg">
            The documentation is still in progress. Some sections may be incomplete or missing.
          </small>
        </aside>
      )}
      <nav className="block w-full max-w-full px-4 py-2 z-50 backdrop-blur-lg bg-opacity-50 sticky top-0 shadow-medium h-max bg-background lg:px-6 lg:py-4 backdrop-saturate-150 inset-x-0">
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
            <div className="hidden mr-4 md:block">
              <nav className="flex gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 items-center">
                {links.map((link, i) => (
                  <Link key={i} href={link.path} className="p-1 text-small hover:text-foreground/80">
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <DocsSearch className="hidden md:flex" />
            <div className="flex items-center gap-x-1">
              <Button asChild color="ghost" size="icon">
                <Link href="https://github.com/Open-Lab-dev/openui">
                  <Icons.GitHub className="size-6" />
                </Link>
              </Button>
              <DarkMode />
              <MobileSidebar />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
