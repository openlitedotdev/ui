import React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn, tooltipTrigger } from '@openui-org/theme'
import type { VariantProps } from '@openui-org/theme'

interface Comp extends React.ElementRef<typeof TooltipPrimitive.Trigger> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>, VariantProps<typeof tooltipTrigger> {}

const TooltipTrigger = React.forwardRef<Comp, Props>(({ className, variant, ...props }, ref) => {
  return (
    <TooltipPrimitive.Trigger
      ref={ref}
      className={cn(tooltipTrigger({ variant }), className)}
      {...props}
    />
  )
})

TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName

export default TooltipTrigger
