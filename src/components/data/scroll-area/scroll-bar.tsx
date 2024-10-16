import { cn, scrollBar } from '@/tailwind'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import React from 'react'

export interface Comp extends React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {}

const ScrollBar = React.forwardRef<Comp, Props>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(scrollBar(), orientation === 'vertical'
    && 'h-full w-2.5 border-l border-l-transparent p-[1px]', orientation === 'horizontal'
    && 'h-2.5 flex-col border-t border-t-transparent p-[1px]', className)}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-default" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export default ScrollBar
