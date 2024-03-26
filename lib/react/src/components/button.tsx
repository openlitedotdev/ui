import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '../lib/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white',
  {
    variants: {
      variant: {
        success: 'bg-success-500 hover:bg-success-400/90',
        primary: 'bg-primary-500 shadow hover:bg-primary-500/90 text-black',
        secondary: 'bg-secondary-500 shadow hover:bg-secondary/90',
        dark: 'bg-dark-500 shadow hover:bg-dark-500/90',
        warn: 'bg-warn-500 shadow hover:bg-warn-500/90',
        error: 'bg-error-500 shadow hover:bg-error-500/90',
      },
      size: {
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-9 px-4 py-2',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'dark',
      size: 'md',
    },
  },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
},
)

Button.displayName = 'Button'

export { Button, buttonVariants, type VariantProps }
