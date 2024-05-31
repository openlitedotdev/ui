import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { cn, selectSeparator } from '@openlabs/theme'

export interface Props extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {}
export interface Comp extends React.ElementRef<typeof SelectPrimitive.Separator> {}

const SelectSeparator = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(selectSeparator(), className)}
    {...props}
  />
))

SelectSeparator.displayName = 'SelectSeparator'

export default SelectSeparator
