import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import type { VariantProps } from '@openlabs/theme'
import { checkbox, cn } from '@openlabs/theme'

export interface Comp extends React.ElementRef<typeof CheckboxPrimitive.Root> {}
export type Props = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & VariantProps<typeof checkbox>

const Checkbox = React.forwardRef<Comp, Props>(({ className, color, rounded, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkbox({ color, rounded }), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" />
      </svg>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export default Checkbox
