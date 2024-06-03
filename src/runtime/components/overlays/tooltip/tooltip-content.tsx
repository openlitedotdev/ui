import React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn, tooltipContent } from '@/tailwind'

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
