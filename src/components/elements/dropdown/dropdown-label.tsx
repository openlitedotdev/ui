import { cn, dropdownLabel } from '@/tailwind'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import React from 'react'

export interface Comp extends React.ElementRef<typeof DropdownPrimitive.Label> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Label> {
  inset?: boolean
}
const DropdownLabel = React.forwardRef<Comp, Props>(({ className, inset, ...props }, ref) => (
  <DropdownPrimitive.Label
    ref={ref}
    className={cn(dropdownLabel(), inset && 'pl-8', className)}
    {...props}
  />
))

DropdownLabel.displayName = DropdownPrimitive.Label.displayName

export default DropdownLabel
