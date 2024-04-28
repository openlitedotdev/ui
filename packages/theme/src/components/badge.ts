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
export const badge = cva('inline-flex items-center rounded-full border px-2.5 py-0.5 text-small font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', {
  variants: {
    variant: {
      default: 'border-transparent bg-primary hover:bg-primary/80',
      secondary: 'border-transparent bg-secondary  hover:bg-secondary/80',
      error: 'border-transparent bg-error hover:bg-error/80',
      outline: 'text-foreground',
    },
    defaultVariants: {
      variant: 'default',
    },
  },
})
