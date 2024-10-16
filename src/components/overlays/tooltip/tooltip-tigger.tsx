import type { VariantProps } from '@/tailwind'
import { cn, tooltipTrigger } from '@/tailwind'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React from 'react'

interface Comp extends React.ElementRef<typeof TooltipPrimitive.Trigger> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>, VariantProps<typeof tooltipTrigger> {}

const TooltipTrigger = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => {
  return (
    <TooltipPrimitive.Trigger
      ref={ref}
      className={cn(tooltipTrigger(), className)}
      {...props}
    />
  )
})

TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName

export default TooltipTrigger
