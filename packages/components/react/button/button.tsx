import type { VariantProps } from '@openui-org/theme'
import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { Ripple, button, cn } from '@openui-org/theme'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof button> {
  asChild?: boolean
  ripple?: boolean
  rippleColor?: 'dark' | 'light'
}

interface Comp extends HTMLButtonElement {}

const Button = React.forwardRef<Comp, Props>(
  ({
    className,
    variant,
    ripple = true,
    rippleColor = 'dark',
    size,
    rounded,
    shadow,
    asChild = false,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const rippleEffect = ripple !== undefined && new Ripple()

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const onMouseDown = props?.onMouseDown

      if (ripple && rippleEffect)
        rippleEffect.create(e, rippleColor)

      return typeof onMouseDown === 'function' && onMouseDown(e)
    }
    return (
      <Comp
        className={cn(button({ variant, size, rounded, shadow, className }))}
        ref={ref}
        onMouseDown={handleMouseDown}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export default Button
