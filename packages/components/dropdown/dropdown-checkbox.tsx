import React from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { cn, dropdownCheckboxItem } from '@openlabs/theme'

export interface Comp extends React.ElementRef<typeof DropdownPrimitive.CheckboxItem> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem> {}

const DropdownCheckboxItem = React.forwardRef<Comp, Props>(({ className, children, checked, ...props }, ref) => (
  <DropdownPrimitive.CheckboxItem
    ref={ref}
    className={cn(dropdownCheckboxItem(), className)}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <DropdownPrimitive.ItemIndicator>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4"><path d="M20 6 9 17l-5-5" /></svg>
      </DropdownPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownPrimitive.CheckboxItem>
))

DropdownCheckboxItem.displayName = DropdownPrimitive.CheckboxItem.displayName

export default DropdownCheckboxItem
