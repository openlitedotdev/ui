import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn, tabsTrigger } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof TabsPrimitive.Trigger> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {}

const TabsTrigger = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTrigger(), className)}
    {...props}
  />
))
TabsTrigger.displayName = 'TabsTrigger'

export default TabsTrigger
