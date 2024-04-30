import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from '@openui-org/theme'
import { button, cn } from '@openui-org/theme'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof button> {
  asChild?: boolean
}

interface Comp extends HTMLButtonElement {}

const Button = React.forwardRef<Comp, Props>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(button({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export default Button
