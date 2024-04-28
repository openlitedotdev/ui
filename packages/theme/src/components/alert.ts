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
export const alert = cva('relative w-full rounded-large border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground', {
  variants: {
    variant: {
      default: 'bg-background',
      error: 'border-error/60 dark:border-error [&>svg]:text-error',
    },
  },
  defaultVariants: {
    variant: 'default',
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
export const alertDescription = cva('text-small [&_p]:leading-relaxed')

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
export const alertTitle = cva('mb-1 font-medium leading-none tracking-tight')
