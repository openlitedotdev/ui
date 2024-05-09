import Link from 'next/link'
import { DocsSearch } from '@/components/docs-search'
import { MainNav } from '@/components/main-nav'
import { DocsSidebarNav } from '@/components/sidebar-nav'
import { docsConfig } from '@/constants/docs'
import { SiteFooter } from '@/components/docs-footer'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full shadow-large">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={docsConfig.mainNav}>
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </MainNav>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0">
              <DocsSearch />
            </div>
            <nav className="flex space-x-4">
              <Link
                href="https://github.com/OpenLab-dev/openui"
                target="_blank"
                rel="noreferrer"
              >
                Github
                <span className="sr-only">GitHub</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1">{children}</div>
      <SiteFooter />
    </div>
  )
}
