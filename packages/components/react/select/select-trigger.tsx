import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { cn, selectTrigger } from '@openui-org/theme'
import type { VariantProps } from '@openui-org/theme'
import SelectValue from './select-value'

export interface Props extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
  VariantProps<typeof selectTrigger> {
  placeholder?: string
}
export interface Comp extends React.ElementRef<typeof SelectPrimitive.Trigger> {}

const SelectTrigger = React.forwardRef<Comp, Props>(({ className, shadow, children, placeholder, ...props }, ref) => {
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn('peer', selectTrigger({ shadow }), className)}
      {...props}
    >
      <SelectValue placeholder={placeholder} />
      <SelectPrimitive.Icon asChild>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
},
)
SelectTrigger.displayName = 'SelectTrigger'

export default SelectTrigger
