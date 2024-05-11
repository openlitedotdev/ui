import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Menu from '@/components/menu'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Open UI',
  description: 'Design system built with Shadcn and Tailwind CSS',
}
const poppins = Poppins({ subsets: ['latin'], display: 'swap', weight: ['400', '500', '600', '700'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
