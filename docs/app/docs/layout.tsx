import { DocsLayout } from 'fumadocs-ui/layout'
import type { ReactNode } from 'react'
import { docsOptions } from '../layout.config'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <aside className="sticky py-2 bg-warn text-warn-foreground text-center">
        <h4 className="font-bold">Documentation is currently in beta</h4>
      </aside>
      <DocsLayout {...docsOptions}>{children}</DocsLayout>
    </>
  )
}
