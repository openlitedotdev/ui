import { cva } from 'class-variance-authority'

/**
 * Label wrapper **Class Variants** component
 *
 * const styles = label({})
 *
 * @example
 * <Label role="label" className={styles())}>
 *   // button elements
 * </Label>
 */
export const label = cva(
  'text-small font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      size: {
        sm: 'text-small',
        md: 'text-medium',
        lg: 'text-large',
      },
      textColor: {
        none: 'text-foreground/70',
        primary: 'text-primary/80',
        success: 'text-success/80',
        warn: 'text-warn/80',
        error: 'text-error/80',
      },
    },
    defaultVariants: {
      size: 'md',
      textColor: 'none',
    },
  },
)
