import { cn, tooltipContent } from '@/tailwind'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React from 'react'

interface Comp extends React.ElementRef<typeof TooltipPrimitive.Content> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {}

const TooltipContent = React.forwardRef<Comp, Props>(({ className, sideOffset = 4, ...props }, ref) => {
  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(tooltipContent(), className)}
      {...props}
    />
  )
})

TooltipContent.displayName = TooltipPrimitive.Content.displayName

export default TooltipContent
