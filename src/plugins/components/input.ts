import { cva } from 'class-variance-authority'

/**
 * Input wrapper **Class Variants** component
 *
 * const styles = input({})
 *
 * @example
 * <Input className={styles())} />
 */
export const input = cva('h-10 w-full transition-colors bg-transparent px-4 py-2 text-medium ring-offset-background file:border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0', {
  variants: {
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-small',
      md: 'rounded-medium',
      lg: 'rounded-large',
    },

    border: {
      none: 'border-none',
      sm: 'border border-default-300',
      md: 'border-2 border-default-300',
      lg: 'border-4 border-default-300',
    },
  },
  defaultVariants: {
    rounded: 'md',
    border: 'sm',
  },
})
