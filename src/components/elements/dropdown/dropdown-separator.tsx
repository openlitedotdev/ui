import { cn, dropdownSeparator } from '@/tailwind'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import React from 'react'

export interface Comp extends React.ElementRef<typeof DropdownPrimitive.Separator> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator> {}

const DropdownSeparator = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Separator
    ref={ref}
    className={cn(dropdownSeparator(), className)}
    {...props}
  />
))

DropdownSeparator.displayName = DropdownPrimitive.Separator.displayName

export default DropdownSeparator
