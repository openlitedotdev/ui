import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { cn, selectItem } from '@openui-org/theme'

export interface Props extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {}
export interface Comp extends React.ElementRef<typeof SelectPrimitive.Item> {}

const SelectItem = React.forwardRef<Comp, Props>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      selectItem(),
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = 'SelectItem'

export default SelectItem
