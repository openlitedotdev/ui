import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome to Open ui',
  description: 'Open UI. A modern design system built with Shadcn UI and Tailwindcss',
}

interface LayoutProps { children: React.ReactNode }

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en" className="dark">
      <body className={archivo.className}>
        <Header />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}
