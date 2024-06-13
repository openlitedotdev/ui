import { cva } from 'class-variance-authority'

/**
 * Avatar wrapper **Class Variants** component
 *
 * const styles = avatar({})
 *
 * @example
 * <Avatar role="img" className={styles())}>
 *   // alert elements
 * </Avatar>
 */
export const avatar = cva('relative flex shrink-0 overflow-hidden rounded-full', {
  variants: {
    size: {
      sm: 'size-8',
      md: 'size-10',
      lg: 'size-12',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

/**
 * Avatar wrapper **Class Variants** component
 *
 * const styles = avatarImage({})
 *
 * @example
 * <AvatarImage role="img" className={styles())} /> // alert image elements
 */
export const avatarImage = cva('aspect-square h-full w-full')

/**
 * Avatar wrapper **Class Variants** component
 *
 * const styles = avatarFallback({})
 *
 * @example
 * <AvatarImage role="description" className={styles())}>
 * // alert image elements
 * </AvatarFallback>
 */
export const avatarFallback = cva('flex h-full w-full items-center justify-center rounded-full')
