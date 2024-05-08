'use client'

import * as React from 'react'
import Link from 'next/link'

import { MobileNav } from './mobile-nav'

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        Open UI
      </Link>
      {items?.length
        ? (
          <nav className="hidden gap-6 md:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? '#' : item.href}
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          )
        : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <span className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  )
}
