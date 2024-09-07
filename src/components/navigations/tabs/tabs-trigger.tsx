import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { VariantProps } from '@/tailwind'
import { cn, tabsTrigger } from '@/tailwind'

export interface Comp extends React.ElementRef<typeof TabsPrimitive.Trigger> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
  VariantProps<typeof tabsTrigger> {}

const TabsTrigger = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabsTrigger(), className)}

      {...props}
    />
  )
})
TabsTrigger.displayName = 'TabsTrigger'

export default TabsTrigger
