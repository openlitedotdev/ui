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
export const tooltipTrigger = cva('')

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
 * <TooltipContent role="group" className={styles())}>
 *   // Tooltip elements
 * </TooltipContent>
 */
export const tooltipContent = cva('z-50 overflow-hidden rounded-medium border bg-primary px-3 py-1.5 text-small text-foreground text-popover-foreground shadow-medium animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2')
