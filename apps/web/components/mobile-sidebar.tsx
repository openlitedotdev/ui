import { useState } from 'react'
import { Button, ScrollArea, Sheet, SheetContent, SheetTrigger } from '@openui-org/react'
import { DocsSidebarNav } from './sidebar-nav'
import { docsConfig } from '@/constants/docs'

export default function MobileSidebar() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button color="ghost" size="icon" className="md:hidden">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
              <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
