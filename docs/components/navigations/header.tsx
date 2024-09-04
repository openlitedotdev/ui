import Link from 'next/link'
import { Button, Sheet, SheetContent, SheetTrigger } from '@openlite/ui'
import { MenuIcon } from 'lucide-react'

const links = [
  { label: 'Templates', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Releases', href: '#' },
  { label: 'Components', href: 'https://ui.openlabs.online/docs/components/accordion' },
]

function SubMenu({ classes }: { classes: string }) {
  return (
    <nav className={classes}>
      {links.map((link, key) => (
        <Link href={link.href} key={key}>{link.label}</Link>
      ))}
    </nav>
  )
}

function SubDocumentation({ classes }: { classes: string }) {
  return (
    <div className={classes}>
      <Button outline="default" asChild>
        <Link href="/docs" className="text-neutral-500">
          Doucmentation
        </Link>
      </Button>
      <Button asChild>
        <Link href="https://github.com/openlitedotdev/ui">
          Github
        </Link>
      </Button>
    </div>
  )
}

function SidebarMenuMobile() {
  return (
    <nav className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <div className="space-y-4 py-4">
            <SubMenu classes="flex flex-col md:hidden gap-y-3" />
            <SubDocumentation classes="flex md:hidden items-center gap-4" />
          </div>

        </SheetContent>
      </Sheet>
    </nav>
  )
}

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center gap-x-14 text-neutral-500">
      <SubMenu classes="hidden md:ml-auto md:flex gap-4 sm:gap-6" />
      <SubDocumentation classes="hidden md:flex items-center justify-center gap-4" />
      <SidebarMenuMobile />
    </header>
  )
}
