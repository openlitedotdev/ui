import { cva } from 'class-variance-authority'

/**
 * Progress wrapper **Class Variants** component
 *
 * const styles = progress({})
 *
 * @example
 * <Progress className={styles())}>
 *   // button elements
 * </Progress>
 */

export const progress = cva('relative h-4 w-full overflow-hidden rounded-full')
