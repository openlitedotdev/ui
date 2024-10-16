import { cn, dropdownContent } from '@/tailwind'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import React from 'react'
import DropdownPortal from './dropdown-portal'

export interface Comp extends React.ElementRef<typeof DropdownPrimitive.Content> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content> {}

const DropdownContent = React.forwardRef<Comp, Props>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownPortal>
    <DropdownPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(dropdownContent(), className)}
      {...props}
    >
      <div className="w-full max-h-64 overflow-y-auto overflow-x-hidden">
        {props.children}
      </div>
    </DropdownPrimitive.Content>
  </DropdownPortal>
))

DropdownContent.displayName = DropdownPrimitive.Content.displayName

export default DropdownContent
