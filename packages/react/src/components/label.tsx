import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '../lib/cn'

const labelVariants = cva(
  'font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      variant: {
        success: 'text-success-500 hover:text-success-400/90',
        primary: 'text-primary-500 hover:text-primary-500/90',
        secondary: 'text-secondary-500 hover:text-secondary-500/90',
        dark: 'text-dark-900 hover:text-dark-900/90',
        warn: 'text-warn-500 hover:text-warn-500/90',
        error: 'text-error-500 hover:text-error-500/90',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },
    },
    defaultVariants: {
      variant: 'dark',
      size: 'md',
    },
  },
)

const Label = React.forwardRef<
React.ElementRef<typeof LabelPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
VariantProps<typeof labelVariants>
>(({ variant, size, className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ variant, size }), className)}
    {...props}
  />
))

Label.displayName = LabelPrimitive.Root.displayName

export { Label }
