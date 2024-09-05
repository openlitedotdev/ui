import { cva } from 'class-variance-authority'

/**
 * Button wrapper **Class Variants** component
 *
 * const styles = button({})
 *
 * @example
 * <Button role="button" className={styles())}>
 *   // button elements
 * </Button>
 */
export const button = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2',
  {
    variants: {
      variant: {
        default: 'bg-default text-default-foreground',
        primary: 'bg-primary text-primary-foreground',
        error: 'bg-error text-error-foreground',
        success: 'bg-success text-success-foreground',
        warn: 'bg-warn text-warn-foreground',
        ghost: 'bg-transparent !shadow-none',
        link: 'underline-offset-4 hover:underline bg-transparent !shadow-none',
      },
      outline: {
        none: 'border-0',
        default: 'border dark:border-default-700 bg-transparent text-foreground',
        primary: 'border border-primary bg-transparent text-foreground hover:text-primary-foreground hover:bg-primary',
        error: 'border border-error bg-transparent text-foreground hover:text-error-foreground hover:bg-error',
        success: 'border border-success bg-transparent text-foreground hover:text-success-foreground hover:bg-success',
        warn: 'border border-warn bg-transparent text-foreground hover:text-warn-foreground hover:bg-warn',
      },
      size: {
        sm: 'px-4',
        md: 'px-6',
        lg: 'px-8',
        icon: 'size-8 p-0',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-small',
        md: 'rounded-medium',
        lg: 'rounded-large',
        full: 'rounded-full',
      },

    },
    defaultVariants: {
      variant: 'default',
      outline: 'none',
      size: 'sm',
      rounded: 'md',

    },
  },
)
