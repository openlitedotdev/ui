import React from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { cn, dropdownItem } from '@openlabs/theme'

export interface Comp extends React.ElementRef<typeof DropdownPrimitive.Item> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item> {
  inset?: boolean
}
const DropdownItem = React.forwardRef<Comp, Props>(({ className, inset, ...props }, ref) => (
  <DropdownPrimitive.Item
    ref={ref}
    className={cn(dropdownItem(), inset && 'pl-8', className)}
    {...props}
  />
))

DropdownItem.displayName = DropdownPrimitive.Item.displayName

export default DropdownItem
