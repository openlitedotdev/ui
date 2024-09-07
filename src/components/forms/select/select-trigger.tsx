import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { cn, selectTrigger } from '@/tailwind'
import type { VariantProps } from '@/tailwind'

export interface Comp extends React.ElementRef<typeof SelectPrimitive.Trigger> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
  VariantProps<typeof selectTrigger> {
  hiddenIcon: boolean
}

const SelectTrigger = React.forwardRef<Comp, Props>(({ className, variant, children, size, hiddenIcon = false, ...props }, ref) => {
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(selectTrigger({ variant, size }), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild className={`${hiddenIcon ? 'hidden' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2rem" height="1.2rem" color="foreground" fill="none">
          <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
},
)
SelectTrigger.displayName = 'SelectTrigger'

export default SelectTrigger
