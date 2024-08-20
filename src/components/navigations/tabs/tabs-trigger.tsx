import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { VariantProps } from '@/tailwind'
import { Ripple, cn, tabsTrigger } from '@/tailwind'

export interface Comp extends React.ElementRef<typeof TabsPrimitive.Trigger> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
  VariantProps<typeof tabsTrigger> {
  ripple?: boolean
  rippleColor?: 'dark' | 'light'
}

const TabsTrigger = React.forwardRef<Comp, Props>(({ className, ripple = true, rippleColor = 'light', varinat, ...props }, ref) => {
  const rippleEffect = ripple !== undefined && new Ripple()

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const onMouseDown = props?.onMouseDown

    if (ripple && rippleEffect)
      rippleEffect.create(e, rippleColor)

    return typeof onMouseDown === 'function' && onMouseDown(e)
  }
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabsTrigger({ varinat }), className)}
      onMouseDown={handleMouseDown}
      {...props}
    />
  )
})
TabsTrigger.displayName = 'TabsTrigger'

export default TabsTrigger
