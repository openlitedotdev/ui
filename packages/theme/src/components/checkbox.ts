import { cva } from 'class-variance-authority'

/**
 * Checkbox wrapper **Class Variants** component
 *
 * const styles = checkbox({...})
 *
 * @example
 * <Checkbox className={styles())} />
 */
export const checkbox = cva('peer size-4 shrink-0 rounded-small border focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground')
