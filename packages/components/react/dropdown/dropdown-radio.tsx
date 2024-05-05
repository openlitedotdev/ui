import React from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { cn, dropdownRadioItem } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof DropdownPrimitive.RadioItem> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.RadioItem> {}

const DropdownRadioItem = React.forwardRef<Comp, Props>(({ className, children, ...props }, ref) => (
  <DropdownPrimitive.RadioItem
    ref={ref}
    className={cn(dropdownRadioItem(), className)}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <DropdownPrimitive.ItemIndicator>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle h-2 w-2 fill-current"><circle cx="12" cy="12" r="10" /></svg>
      </DropdownPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownPrimitive.RadioItem>
))

DropdownRadioItem.displayName = DropdownPrimitive.RadioItem.displayName

export default DropdownRadioItem
