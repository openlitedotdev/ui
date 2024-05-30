import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { cn, selectScrollUpButton } from '@openlabs/theme'

export interface Props extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> {}
export interface Comp extends React.ElementRef<typeof SelectPrimitive.ScrollUpButton> {}

const SelectScrollUpButton = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(selectScrollUpButton(), className)}
    {...props}
  >
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = 'SelectScrollUpButton'

export default SelectScrollUpButton
