import { cva } from 'class-variance-authority'

/**
 * Separator wrapper **Class Variants** component
 *
 * const styles = separator({})
 *
 * @example
 * <Separator role="group" className={styles())} />
 */
export const separator = cva('shrink-0 bg-foreground/30 h-[1px]')
