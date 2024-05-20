import { cva } from 'class-variance-authority'

/**
 * Sider wrapper **Class Variants** component
 *
 * const styles = slider({})
 *
 * @example
 * <Slider className={styles())} />
 */
export const slider = cva('relative flex w-full touch-none select-none items-center')

/**
 * Track wrapper **Class Variants** component
 *
 * const styles = track({})
 *
 * @example
 * <Track className={styles()} />
 */
export const sliderTrack = cva('relative h-2 w-full grow overflow-hidden rounded-full bg-default')

/**
 * Range wrapper **Class Variants** component
 *
 * const styles = range({})
 *
 * @example
 * <Range className={styles()} />
 */
export const sliderRange = cva('absolute h-full', {
  variants: {
    background: {
      primary: 'bg-primary',
      success: 'bg-success',
      warn: 'bg-warn',
      error: 'bg-error',
    },
  },
  defaultVariants: {
    background: 'primary',
  },
})

/**
 * Thumb wrapper **Class Variants** component
 *
 * const styles = thumb({})
 *
 * @example
 * <Thumb className={styles()} />
 */
export const sliderThumb = cva('block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50')
