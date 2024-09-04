import './global.css'
import { RootProvider } from 'fumadocs-ui/provider'
import { DM_Sans } from 'next/font/google'
import type { ReactNode } from 'react'

const inter = DM_Sans({
  subsets: ['latin'],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
