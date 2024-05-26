import './globals.css'
import '@fontsource-variable/onest'

import type { Metadata } from 'next'
import Menu from '@/components/menu'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/provider-theme'

export const metadata: Metadata = {
  title: 'Open UI',
  description: 'Design system built with Shadcn and Tailwind CSS',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="dark" suppressHydrationWarning dir="ltr" lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Menu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
