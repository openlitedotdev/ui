import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn, progress } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof ProgressPrimitive.Root> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {}

const Progress = React.forwardRef<Comp, Props>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(progress(), className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))

Progress.displayName = ProgressPrimitive.Root.displayName

export default Progress
