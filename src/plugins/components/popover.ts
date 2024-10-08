import { cva } from 'class-variance-authority'

/**
 * Popover wrapper **Class Variants** component
 *
 * const styles = popover({})
 *
 * @example
 * <Popover role="label" className={styles())}>
 *   // Popover elements
 * </Popover>
 */
export const popover = cva('')

/**
 * Popover wrapper **Class Variants** component
 *
 * const styles = popoverTrigger({})
 *
 * @example
 * <PopoverTrigger role="group" className={styles())}>
 *   // PopoverTrigger elements
 * </PopoverTrigger>
 */
export const popoverTrigger = cva('')

/**
 * Popover wrapper **Class Variants** component
 *
 * const styles = popoverContent({})
 *
 * @example
 * <PopoverContent role="group" className={styles())}>
 *   // PopoverContent elements
 * </PopoverContent>
 */
export const popoverContent = cva('z-50 w-72 rounded-medium bg-background border border-foreground/10 p-4 shadow-medium outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', {
  variants: {
    shadow: {
      sm: 'shadow-small',
      md: 'shadow-medium',
      lg: 'shadow-large',
    },
  },
  defaultVariants: {
    shadow: 'md',
  },
})
