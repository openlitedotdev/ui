import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn, tabsList } from '@openlabs/theme'
import React from 'react'

export interface Comp extends React.ElementRef<typeof TabsPrimitive.List> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {}

const TabsList = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsList(), className)}
    {...props}
  />
))
TabsList.displayName = 'TabsList'

export default TabsList
