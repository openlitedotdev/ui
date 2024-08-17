import React from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import DropdownPortal from './dropdown-portal'
import { ScrollArea } from '@/components/data/scroll-area'
import { cn, dropdownContent } from '@/tailwind'

export interface Comp extends React.ElementRef<typeof DropdownPrimitive.Content> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content> {}

const DropdownMenuContent = React.forwardRef<Comp, Props>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownPortal>
    <DropdownPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(dropdownContent(), className)}
      {...props}
    >
      <ScrollArea className="w-full h-72">
        {props.children}
      </ScrollArea>
    </DropdownPrimitive.Content>
  </DropdownPortal>
))

DropdownMenuContent.displayName = DropdownPrimitive.Content.displayName

export default DropdownMenuContent
