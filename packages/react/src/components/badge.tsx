import * as React from 'react'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '../lib/cn'

const badgeVariants = cva(
  'inline-flex items-center rounded border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white shadow cursor-pointer',
  {
    variants: {
      variant: {
        success: 'bg-success-500 hover:bg-success-400/90',
        primary: 'bg-primary-500 hover:bg-primary-500/90 text-black',
        secondary: 'bg-secondary-500 hover:bg-secondary/90',
        dark: 'bg-dark-900 hover:bg-dark-900/90',
        warn: 'bg-warn-500 hover:bg-warn-500/90',
        error: 'bg-error-500 hover:bg-error-500/90',
        ligth: 'bg-white hover:bg-white/90 text-black',
      },
    },
    defaultVariants: {
      variant: 'dark',
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

Badge.displayName = 'Badge'

export { Badge, badgeVariants }
