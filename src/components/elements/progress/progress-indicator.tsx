import type { VariantProps } from '@/tailwind'
import { cn, progressIndicator } from '@/tailwind'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

export interface Comp extends React.ElementRef<typeof ProgressPrimitive.Indicator> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Indicator>,
  VariantProps<typeof progressIndicator> {
  value: number
  variant: 'default' | 'error' | 'primary' | 'success' | 'warn'
}

const ProgressIndicator = React.forwardRef<Comp, Props>(({ className, value, variant }, ref) => (
  <ProgressPrimitive.Indicator
    ref={ref}
    className={cn(progressIndicator({ variant }), className)}
    style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
  />
))

ProgressIndicator.displayName = ProgressPrimitive.Root.displayName

export default ProgressIndicator
