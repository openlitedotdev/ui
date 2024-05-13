'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@openui-org/react'
import { cn } from '@openui-org/theme'
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
      <div className="w-full pr-2">
        {items.map((item, index) => (
          <div key={index} className="pb-8">
            <h4 className="mb-1 rounded-md px-2 py-1 text-medium font-medium">
              {item.title}
            </h4>
            {item.items
              ? (<DocsSidebarNavItems items={item.items} />)
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
  const path = usePathname()
  return items?.length
    ? (
      <div className="flex flex-col justify-start items-start text-small">
        {items.map((item, index) => (
          <Button key={index} asChild variant="ghost" className={cn('w-full flex justify-start items-start', path === item.href ? 'bg-black/10' : 'bg-transparent')}>
            <Link
              href={item.href!}
              className="!font-light"
              target={item.external ? '_blank' : ''}
            >
              {item.title}
            </Link>
          </Button>
        ))}
      </div>
      )
    : null
}
