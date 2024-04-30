import { cva } from 'class-variance-authority'

/**
 * Label wrapper **Class Variants** component
 *
 * const styles = label({})
 *
 * @example
 * <Label role="label" className={styles())}>
 *   // button elements
 * </Label>
 */
export const label = cva(
  'text-small font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
)
