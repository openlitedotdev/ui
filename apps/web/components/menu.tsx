'use client'
import { Button } from '@openui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DocsSearch } from './docs-search'
import { Icons } from './icons'
import MovilSidebar from './movil-sidebar-nav'
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
      <nav className="block w-full max-w-full px-4 py-2 rounded-none shadow-md h-max bg-background lg:px-8 lg:py-4 dark:border dark:border-default">
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
                  <Link key={i} href={link.path} className="p-1 text-small hover:underline">
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
                <Button asChild color="ghost" size="icon">
                  <Link href="https://github.com/Open-Lab-dev/openui">
                    <Icons.GitHub className="size-6" />
                  </Link>
                </Button>
                <DarkMode />
              </div>
              <MovilSidebar />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
