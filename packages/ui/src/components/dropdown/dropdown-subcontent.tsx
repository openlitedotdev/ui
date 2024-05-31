import React from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { cn, dropdownSubContent } from '@openlabs/theme'

export interface Comp extends React.ElementRef<typeof DropdownPrimitive.SubContent> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent> {}

const DropdownSubContent = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <DropdownPrimitive.SubContent
    ref={ref}
    className={cn(dropdownSubContent(), className)}
    {...props}
  />
))

DropdownSubContent.displayName = DropdownPrimitive.SubContent.displayName

export default DropdownSubContent
