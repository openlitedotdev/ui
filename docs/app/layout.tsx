import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { RootProvider } from 'fumadocs-ui/provider'
import { DM_Sans } from 'next/font/google'
import './global.css'

const inter = DM_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Open UI',
  description: 'A design system built with TailwindCSS and Radix UI.',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
