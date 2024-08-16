import { cva } from 'class-variance-authority'

/**
 * Input wrapper **Class Variants** component
 *
 * const styles = input({})
 *
 * @example
 * <Input className={styles())} />
 */
export const input = cva('h-10 w-full transition-colors rounded-medium border-2 bg-transparent px-4 py-2 text-medium ring-offset-background file:border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0', {
  variants: {
    border: {
      default: 'border-default/30 focus-visible:border-default transition-border durations-500',
      primary: 'border-primary/30 focus-visible:border-primary transition-border durations-500',
      success: 'border-success/30 focus-visible:border-success transition-border durations-500',
      warn: 'border-warn/30 focus-visible:border-warn transition-border durations-500',
      error: 'border-error/30 focus-visible:border-error transition-border durations-500',
    },
    variant: {
      none: 'bg-transparent',
      default: 'bg-default/10',
      primary: 'bg-primary/10',
      success: 'bg-success/10',
      warn: 'bg-warn/10',
      error: 'bg-error/10',
    },
    icons: {
      none: '',
      left: 'pl-10',
      right: 'pr-10',
      both: 'px-10',
    },
    rounded: {
      none: 'rounded-none',
      small: 'rounded-small',
      medium: 'rounded-medium',
      large: 'rounded-large',
    },
  },
  defaultVariants: {
    border: 'default',
    variant: 'none',
    icons: 'none',
    rounded: 'none',
  },
})
