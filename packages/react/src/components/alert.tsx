import * as React from 'react'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '../lib/cn'

const alertVariants = cva(
  'relative w-full rounded-lg px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-white [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        dark: 'bg-dark-900 text-white hover:bg-dark-900/90',
        error: 'bg-error-500 dark:bg-error-500 hover:bg-error-500/90',
        success: 'bg-success-500 dark:bg-success-500 hover:bg-success-500/90',
        warn: 'bg-warn-500 dark:bg-warn-500 hover:bg-warn-500/90',
        ligth: 'bg-white dark:bg-white hover:bg-white/90',
      },
    },
    defaultVariants: {
      variant: 'dark',
    },
  },
)

const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))

Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 text-lg font-medium leading-none tracking-tight', className)}
    {...props}
  />
))

AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-base [&_p]:leading-relaxed', className)}
    {...props}
  />
))

AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
