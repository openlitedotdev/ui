import type { VariantProps } from '@openlabs/theme'
import { Ripple, card, cn } from '@openlabs/theme'
import React from 'react'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {
  ripple?: boolean
  rippleColor?: 'dark' | 'light'
}

const Card = React.forwardRef<Comp, Props>(({
  className,
  rounded,
  shadow,
  border,
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
      className={cn(card({ rounded, shadow, border }), className)}
      onMouseDown={handleMouseDown}
      {...props}
    />

  )
})

Card.displayName = 'Card'

export default Card
