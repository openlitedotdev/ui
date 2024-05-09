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
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
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
      <div className="grid grid-flow-row auto-rows-max text-sm">
        {items.map((item, index) =>
          !item.disabled && item.href
            ? (
              <Link
                key={index}
                href={item.href}
                className="flex w-full items-center rounded-md p-2 hover:underline"
                target={item.external ? '_blank' : ''}
                rel={item.external ? 'noreferrer' : ''}
              >
                {item.title}
              </Link>
              )
            : (
              <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">
                {item.title}
              </span>
              ),
        )}
      </div>
      )
    : null
}
