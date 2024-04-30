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
  'inline-flex items-center justify-center whitespace-nowrap rounded-medium text-smoll font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        error: 'bg-error text-error-foreground hover:bg-error/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
