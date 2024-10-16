import { cn, selectScrollDownButton } from '@/tailwind'
import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'

export interface Props extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> {}
export interface Comp extends React.ElementRef<typeof SelectPrimitive.ScrollDownButton> {}

const SelectScrollDownButton = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(selectScrollDownButton(), className)}
    {...props}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-down-up">
      <path d="m7 20 5-5 5 5" />
      <path d="m7 4 5 5 5-5" />
    </svg>
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = 'SelectScrollDownButton'

export default SelectScrollDownButton
