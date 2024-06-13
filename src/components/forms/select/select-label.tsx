import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { cn, selectLabel } from '@/tailwind'

export interface Props extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {}
export interface Comp extends React.ElementRef<typeof SelectPrimitive.Label> {}

const SelectLabel = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(selectLabel(), className)}
    {...props}
  />
))
SelectLabel.displayName = 'SelectLabel'
export default SelectLabel
