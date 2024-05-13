import { ScrollArea } from '@openui-org/react'
import { DocsSidebarNav } from '@/components/sidebar-nav'
import { docsConfig } from '@/constants/docs'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1 mx-auto">

        <div className="flex-1 md:grid md:grid-cols-[240px_1fr] md:gap-6 lg:grid-cols-[260px_1fr] lg:gap-10">
          <aside className="fixed top-14 h-[calc(100vh-3.5rem)] hidden w-full shrink-0 pt-8 pr-2 md:sticky md:block">
            <ScrollArea className="h-full">
              <DocsSidebarNav items={docsConfig.sidebarNav} />
            </ScrollArea>
          </aside>
          {children}
        </div>
      </div>
    </div>

  )
}
