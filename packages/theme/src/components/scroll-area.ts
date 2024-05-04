import { cva } from 'class-variance-authority'

/**
 * Scroll Area wrapper **Class Variants** component
 *
 * const styles = scrollArea({})
 *
 * @example
 * <ScrollArea className={styles())} />
 */
export const scrollArea = cva('relative overflow-hidden')

/**
 * Scroll Bar wrapper **Class Variants** component
 *
 * const styles = scrollBar({})
 *
 * @example
 * <ScrollBar className={styles())} />
 */
export const scrollBar = cva('flex touch-none select-none transition-colors')
