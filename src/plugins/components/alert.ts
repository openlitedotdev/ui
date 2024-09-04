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
export const alert = cva('relative w-full p-4 [&>svg~*]:pl-8 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 shadow-small', {
  variants: {
    variant: {
      default: 'border border-default-300 dark:bg-border-default-700 text-foreground',
      primary: 'bg-primary text-primary-foreground',
      error: 'bg-error text-error-foreground',
      warn: 'bg-warn text-warn-foreground',
      success: 'bg-success text-success-foreground',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-small',
      md: 'rounded-medium',
      lg: 'rounded-large',
    },
  },
  defaultVariants: {
    variant: 'default',
    rounded: 'md',
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
