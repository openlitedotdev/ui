import type { VariantProps } from '@/tailwind'
import { card, cn, Ripple } from '@/tailwind'
import React from 'react'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {
  ripple?: boolean
  rippleColor?: 'dark' | 'light'
}

const Card = React.forwardRef<Comp, Props>(({
  className,
  rounded,
  orientation,
  ripple = false,
  rippleColor = 'dark',
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
    <div
      ref={ref}
      className={cn(card({ rounded, orientation }), className)}
      onMouseDown={handleMouseDown}
      {...props}
    />

  )
})

Card.displayName = 'Card'

export default Card
