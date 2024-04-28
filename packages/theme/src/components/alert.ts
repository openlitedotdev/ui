import { cva } from 'class-variance-authority'

export const alert = cva(
  'relative w-full rounded-large border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background',
        error: 'border-error/60 dark:border-error [&>svg]:text-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const alertDescription = cva('text-small [&_p]:leading-relaxed')

export const alertTitle = cva('mb-1 font-medium leading-none tracking-tight')
