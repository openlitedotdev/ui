import { cva } from 'class-variance-authority'

/**
 * Progress wrapper **Class Variants** component
 *
 * const styles = progress({})
 *
 * @example
 * <Progress className={styles())}>
 *   // button elements
 * </Progress>
 */

export const progress = cva('relative bg-default w-full overflow-hidden rounded-full', {
  variants: {
    size: {
      sm: 'h-2',
      md: 'h-4',
      lg: 'h-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },

})

/**
 * Progress wrapper **Class Variants** component
 *
 * const styles = progressIndicator({})
 *
 * @example
 * <ProgressIndicator className={styles())} />
 */

export const progressIndicator = cva('h-full relative w-full flex-1 transition-all rounded-full', {
  variants: {
    background: {
      primary: 'bg-primary',
      success: 'bg-success',
      warn: 'bg-warn',
      error: 'bg-error',
    },
  },
  defaultVariants: {
    background: 'primary',
  },
})
