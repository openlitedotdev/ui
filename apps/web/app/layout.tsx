import './globals.css'

import type { Metadata } from 'next'
import Menu from '@/components/menu'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Open UI',
  description: 'Design system built with Shadcn and Tailwind CSS',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning dir="ltr" lang="en">
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
