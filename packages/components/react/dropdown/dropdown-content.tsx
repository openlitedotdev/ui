import React from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { cn, dropdownContent } from '@openui-org/theme'
import DropdownPortal from './dropdown-portal'

export interface Comp extends React.ElementRef<typeof DropdownPrimitive.Content> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content> {}

const DropdownMenuContent = React.forwardRef<Comp, Props>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownPortal>
    <DropdownPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(dropdownContent(), className)}
      {...props}
    />
  </DropdownPortal>
))

DropdownMenuContent.displayName = DropdownPrimitive.Content.displayName

export default DropdownMenuContent
