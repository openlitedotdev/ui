import { cva } from 'class-variance-authority'

/**
 * Input wrapper **Class Variants** component
 *
 * const styles = input({})
 *
 * @example
 * <Input className={styles())} />
 */
export const input = cva('flex h-10 w-full rounded-medium px-3 py-2 text-small file:border-0 file:bg-transparent file:text-small file:font-medium disabled:cursor-not-allowed disabled:opacity-50')
