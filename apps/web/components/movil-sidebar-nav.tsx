import { useState } from 'react'
import { Button, ScrollArea, Sheet, SheetContent, SheetTrigger } from '@openui-org/react'
import { DocsSidebarNav } from './sidebar-nav'
import { docsConfig } from '@/constants/docs'

export default function MovilSidebar() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button color="ghost" size="icon" className="relative md:hidden ml-auto">
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
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <ScrollArea className="h-screen">
          <DocsSidebarNav items={docsConfig.sidebarNav} setOpen={setOpen} />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
