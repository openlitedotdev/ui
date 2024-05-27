import { useState } from 'react'
import { Button, ScrollArea, Sheet, SheetContent, SheetTrigger } from '@openui-org/react'
import { DocsSidebarNav } from './sidebar-nav'
import { docsConfig } from '@/constants/docs'

export default function MovilSidebar() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button color="ghost" size="icon" className="relative bg-transparent border border-default md:hidden h-9 px-5">
          <span className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
              <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
