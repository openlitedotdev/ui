import { cn, tabsContent } from '@/tailwind'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import React from 'react'

export interface Comp extends React.ElementRef<typeof TabsPrimitive.Content> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}

const TabsContent = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(tabsContent(), className)}
    {...props}
  />
))
TabsContent.displayName = 'TabsContent'

export default TabsContent
