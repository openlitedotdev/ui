import { cva } from 'class-variance-authority'

/**
 * Alert wrapper **Class Variants** component
 *
 * const styles = alert({})
 *
 * @example
 * <Alert role="alert" className={styles())}>
 *   // alert elements
 * </Alert>
 */
export const alert = cva('relative w-full p-4 [&>svg~*]:pl-8 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground', {
  variants: {
    outline: {
      primary: 'border border-primary/30 dark:border-primary [&>svg]:text-primary text-primary/80',
      error: 'border border-error/30 dark:border-error [&>svg]:text-error text-error/80',
      warn: 'border border-warn/30 dark:border-warn [&>svg]:text-warn text-warn/80',
      success: 'border border-success/30 dark:border-success [&>svg]:text-success text-success/80',
      none: 'border border-transparent',
    },
    background: {
      none: 'bg-transparent dark:bg-transparent',
      primary: 'bg-primary/20 dark:bg-primary [&>svg]:text-primary text-primary/80 dark:text-primary-foreground dark:[&>svg]:text-white',
      error: 'bg-error/20 [&>svg]:text-error text-error/80 dark:text-error-foreground dark:bg-error',
      warn: 'bg-warn/20 [&>svg]:text-warn text-warn/80 dark:text-warn-foreground dark:bg-warn',
      success: 'bg-success/20 [&>svg]:text-success text-success/80 dark:text-success-foreground dark:bg-success',
    },

    shadow: {
      none: 'shadow-none',
      sm: 'shadow-small',
      md: 'shadow-medium',
      lg: 'shadow-large',
    },

    rounded: {
      none: 'rounded-none',
      sm: 'rounded-small',
      md: 'rounded-medium',
      lg: 'rounded-large',
    },

  },
  defaultVariants: {
    background: 'primary',
    shadow: 'sm',
    rounded: 'sm',
    outline: 'none',
  },
})

/**
 * Alert wrapper **Class Variants** component
 *
 * const styles = alertTitle({})
 *
 * @example
 * <AvatarTitle role="alert" className={styles())}>
 *   // alert title elements
 * </AvatarTitle>
 */
export const alertTitle = cva('mb-2 font-semibold leading-none tracking-tight', {
  variants: {
    size: {
      sm: 'text-small',
      md: 'text-medium',
      lg: 'text-large',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

/**
 * Alert wrapper **Class Variants** component
 *
 * const styles = alertDescription({})
 *
 * @example
 * <AlertDescription role="alert" className={styles())}>
 *   // alert description elements
 * </AlertDescription>
 */
export const alertDescription = cva('[&_p]:leading-relaxed', {
  variants: {
    size: {
      sm: 'text-small',
      md: 'text-medium',
      lg: 'text-large',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})
