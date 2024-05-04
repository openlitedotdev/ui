import React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cn, scrollArea } from '@openui-org/theme'
import ScrollBar from './scroll-bar'

export interface Comp extends React.ElementRef<typeof ScrollAreaPrimitive.Root> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {}

const ScrollArea = React.forwardRef<Comp, Props>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn(scrollArea(), className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

export default ScrollArea
