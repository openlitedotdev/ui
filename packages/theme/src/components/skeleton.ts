import { cva } from 'class-variance-authority'

/**
 * Skeleton wrapper **Class Variants** component
 *
 * const styles = skeleton({})
 *
 * @example
 * <Skeleton role="label" className={styles())}>
 *   // Skeleton elements
 * </Skeleton>
 */
export const skeleton = cva('animate-pulse-infinite bg-default', {
  variants: {
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    rounded: 'full',
  },
})
