import { cva } from 'class-variance-authority'

/**
 * Checkbox wrapper **Class Variants** component
 *
 * const styles = checkbox({...})
 *
 * @example
 * <Checkbox className={styles())} />
 */
export const checkbox = cva('peer size-4 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', {
  variants: {
    variant: {
      default: 'data-[state=checked]:bg-default data-[state=checked]:text-default-foreground border border-default',
      primary: 'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border border-primary',
      success: 'data-[state=checked]:bg-success data-[state=checked]:text-success-foreground border border-success',
      error: 'data-[state=checked]:bg-error data-[state=checked]:text-error-foreground border border-error',
      warn: 'data-[state=checked]:bg-warn data-[state=checked]:text-warn-foreground border border-warn',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-small',
      lg: 'rounded-large',
    },
  },
  defaultVariants: {
    variant: 'default',
    rounded: 'sm',
  },
})
