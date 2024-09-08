import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '@openlite/ui'
import { LinkRepo } from './link-repo'
import { Menu } from './icons/menu'

const links = [
  { label: 'Documentation', href: '/docs' },
  { label: 'Components', href: '/docs/components/accordion' },
  { label: 'Templates', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Releases', href: '#' },
]

function SubMenu({ classes }: { classes: string }) {
  return (
    <nav className={classes}>
      {links.map((link, key) => (
        <Link href={link.href} key={key} className="hover:text-neutral-700">{link.label}</Link>
      ))}
    </nav>
  )
}

function SidebarMenuMobile() {
  return (
    <nav className="block md:hidden ml-auto">
      <Sheet>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <div className="space-y-4 py-4">
            <SubMenu classes="flex flex-col md:hidden gap-y-3" />
            <LinkRepo classes="flex md:hidden items-center gap-4" />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export function Header() {
  return (
    <header className="px-4 lg:px-6 flex items-center gap-x-14 text-neutral-500 py-3 sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <SubMenu classes="hidden md:ml-auto md:flex gap-4 sm:gap-6" />
      <LinkRepo classes="hidden md:flex items-center justify-center gap-4" />
      <SidebarMenuMobile />
    </header>
  )
}
