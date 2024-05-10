import type { VariantProps } from '@openui-org/theme'
import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Ripple, accordionItem, cn } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof AccordionPrimitive.Item> {}
export type Props = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & VariantProps<typeof accordionItem> & {
  ripple?: boolean
  rippleColor?: 'dark' | 'light'
}

const AccordionItem = React.forwardRef<Comp, Props>(({
  className,
  ripple = false,
  rippleColor = 'dark',
  color,
  shadow,
  radius,
  separator,
  ...props
}, ref) => {
  const rippleEffect = ripple !== undefined && new Ripple()

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const onMouseDown = props?.onMouseDown

    if (ripple && rippleEffect)
      rippleEffect.create(e, rippleColor)

    return typeof onMouseDown === 'function' && onMouseDown(e)
  }
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(accordionItem({ color, shadow, radius, separator }), className)}
      onMouseDown={handleMouseDown}
      {...props}
    />
  )
})

AccordionItem.displayName = 'AccordionItem'

export default AccordionItem
