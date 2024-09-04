import { cva } from 'class-variance-authority'

/**
 * Badge wrapper **Class Variants** component
 *
 * const styles = badge({})
 *
 * @example
 * <Badge role="img" className={styles())}>
 *   // alert elements
 * </Badge>
 */
export const badge = cva('inline-flex gap-2 items-center px-2.5 py-0.5 text-small font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', {
  variants: {
    variant: {
      default: 'bg-default text-default-foreground hover:bg-default/90',
      primary: 'bg-primary/90 text-primary-foreground hover:bg-primary/90',
      error: 'bg-error text-error-foreground hover:bg-error/80',
      success: 'bg-success text-success-foreground hover:bg-success/80',
      warn: 'bg-warn text-warn-foreground hover:bg-warn/80',
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
    rounded: 'md',
  },
})
