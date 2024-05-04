import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn, separator } from '@openui-org/theme'

export interface Props extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {}
export interface Comp extends React.ElementRef<typeof SeparatorPrimitive.Root> {}

const Separator = React.forwardRef<Comp, Props>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(separator(), orientation === 'horizontal' ? 'w-full' : 'h-full w-[1px]', className)}
    {...props}
  />
),
)
Separator.displayName = 'Separator'

export default Separator
