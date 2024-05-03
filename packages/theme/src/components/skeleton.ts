import { cva } from 'class-variance-authority'

/**
 * Skeleton wrapper **Class Variants** component
 *
 * const styles = skeleton({})
 *
 * @example
 * <Skeleton role="label" className={styles())}>
 *   // Skeleton elements
 * </Skeleton>
 */
export const skeleton = cva('animate-pulse bg-foreground/20 rounded-full')
