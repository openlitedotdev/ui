import { cva } from 'class-variance-authority'
import { size } from 'lodash'

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
  {
    variants: {
      size: {
        small: 'text-small',
        medium: 'text-medium',
        large: 'text-large',
      },
      defaultVariants: {
        size: 'medium',
      },
    },
  },
)
