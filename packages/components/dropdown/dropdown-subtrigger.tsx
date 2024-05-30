import React from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { cn, dropdownSubTrigger } from '@openlabs/theme'

export interface Comp extends React.ElementRef<typeof DropdownPrimitive.SubTrigger> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger> {
  inset?: boolean
}

const DropdownSubTrigger = React.forwardRef< Comp, Props>(({ className, inset, children, ...props }, ref) => (
  <DropdownPrimitive.SubTrigger
    ref={ref}
    className={cn(dropdownSubTrigger(), inset && 'pl-8', className)}
    {...props}
  >
    {children}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-auto size-4"><path d="m9 18 6-6-6-6" /></svg>
  </DropdownPrimitive.SubTrigger>
))

DropdownSubTrigger.displayName = DropdownPrimitive.SubTrigger.displayName

export default DropdownSubTrigger
