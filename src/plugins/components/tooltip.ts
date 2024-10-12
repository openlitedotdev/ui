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
export const tooltipTrigger = cva()

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
export const tooltipContent = cva('z-50 w-fit max-w-72 px-2 py-1 bg-background border rounded-medium text-small')
