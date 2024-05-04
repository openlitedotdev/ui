import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { checkbox, cn } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof CheckboxPrimitive.Root> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

const Checkbox = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkbox(), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-4"><path d="M20 6 9 17l-5-5" /></svg>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export default Checkbox
