'use client'

import Link from 'next/link'
import type { NavItem } from './main-nav'

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
} & (
  | {
    href: string
    items?: never
  }
  | {
    href?: string
    items: NavItem[]
  }
  )

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  return items.length
    ? (
      <div className="w-full">
        {items.map((item, index) => (
          <div key={index} className="pb-8">
            <h4 className="mb-1 rounded-md px-2 py-1 text-medium font-medium">
              {item.title}
            </h4>
            {item.items
              ? (
                <DocsSidebarNavItems items={item.items} />
                )
              : null}
          </div>
        ))}
      </div>
      )
    : null
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNavItems({ items }: DocsSidebarNavItemsProps) {
  return items?.length
    ? (
      <div className="grid grid-flow-row auto-rows-max text-small">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href!}
            className="flex w-full items-center p-2 text-black/70 hover:text-black/90 transition-colors duration-200 ease-in-out"
            target={item.external ? '_blank' : ''}
            rel={item.external ? 'noreferrer' : ''}
          >
            {item.title}
          </Link>
        ))}
      </div>
      )
    : null
}
