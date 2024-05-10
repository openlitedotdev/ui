import { cva } from 'class-variance-authority'

/**
 * Input wrapper **Class Variants** component
 *
 * const styles = input({})
 *
 * @example
 * <Input className={styles())} />
 */
export const input = cva('h-10 w-full peer transition-colors rounded-medium border-2 bg-transparent px-4 py-2 text-medium ring-offset-background file:border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0', {
  variants: {
    border: {
      none: 'border-foreground/30 focus-visible:border-foreground/60',
      primary: 'border-primary/50 focus-visible:border-primary',
      success: 'border-success/50 focus-visible:border-success',
      warn: 'border-warn/50 focus-visible:border-warn',
      error: 'border-error/50 focus-visible:border-error',
    },
    background: {
      none: 'bg-transparent',
      primary: 'bg-primary/30',
      success: 'bg-success/30',
      warn: 'bg-warn/30',
      error: 'bg-error/30',
    },
    text: {
      small: 'text-sm',
      medium: 'text-medium',
      large: 'text-lg',
    },
  },
  defaultVariants: {
    border: 'none',
    background: 'none',
    text: 'medium',
  },
})
