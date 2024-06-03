import { cva } from 'class-variance-authority'

/**
 * Tooltip wrapper **Class Variants** component
 *
 * const styles = tooltip({...})
 *
 * @example
 * <Tooltip role="group" className={styles())}>
 *   // Tooltip elements
 * </Tooltip>
 */
export const tooltip = cva('')

/**
 * Tooltip wrapper **Class Variants** component
 *
 * const styles = tooltipTrigger({...})
 *
 * @example
 * <TooltipTrigger role="group" className={styles())}>
 *   // Tooltip elements
 * </TooltipTrigger>
 */
export const tooltipTrigger = cva('px-2 py-1 rounded-large text-white hover:animate-pop', {
  variants: {
    variant: {
      primary: 'bg-primary/70 animation-pulse hover:bg-primary',
      success: 'bg-success/70 animation-pulse hover:bg-success',
      error: 'bg-error/70 animation-pulse hover:bg-error',
      warn: 'bg-warn/70 animation-pulse hover:bg-warn',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

/**
 * Tooltip wrapper **Class Variants** component
 *
 * const styles = tooltipProvider({...})
 *
 * @example
 * <TooltipProvider role="group" className={styles())}>
 *   // Tooltip elements
 * </TooltipProvider>
 */
export const tooltipProvider = cva('')
/**
 * Tooltip wrapper **Class Variants** component
 *
 * const styles = tooltipContent({...})
 *
 * @example
 * <TooltipContent role="group" side="top" variant="primary" className={styles())}>
 *   // Tooltip elements
 * </TooltipContent>
 */
export const tooltipContent = cva('z-50 max-w-72 px-2 py-1 !text-white bg-slate-900 overflow-hidden rounded-large text-small shadow-large animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2')
