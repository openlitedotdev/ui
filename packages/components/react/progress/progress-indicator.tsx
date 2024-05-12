import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn, progressIndicator } from '@openui-org/theme'
import type { VariantProps } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof ProgressPrimitive.Indicator> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Indicator>,
  VariantProps<typeof progressIndicator> {
  value: number
}

const ProgressIndicator = React.forwardRef<Comp, Props>(({ className, value, background }, ref) => (
  <ProgressPrimitive.Indicator
    ref={ref}
    className={cn(progressIndicator({ background }), className)}
    style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
  />
))

ProgressIndicator.displayName = ProgressPrimitive.Root.displayName

export default ProgressIndicator
