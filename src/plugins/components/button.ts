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
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2',
  {
    variants: {
      color: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        error: 'bg-error text-error-foreground hover:bg-error/80',
        success: 'bg-success text-success-foreground hover:bg-success/80',
        warn: 'bg-warn text-warn-foreground hover:bg-warn/80',
        ghost: 'bg-transparent !shadow-none hover:bg-black/10',
        link: 'underline-offset-4 hover:underline bg-transparent !shadow-none',
      },
      size: {
        sm: 'px-4',
        md: 'px-6',
        lg: 'px-8',
        icon: 'size-8 p-0',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-small',
        md: 'rounded-medium',
        lg: 'rounded-large',
      },
      shadow: {
        none: 'shadow-none',
        sm: 'shadow-small',
        md: 'shadow-medium',
        lg: 'shadow-large',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'sm',
      rounded: 'sm',
      shadow: 'sm',
    },
  },
)
