import { cva } from 'class-variance-authority'

/**
 * Dialog wrapper **Class Variants** component
 *
 * const styles = dialog({})
 *
 * @example
 * <Dialog className={styles())}>
 *   // button elements
 * </Dialog>
 */
export const dialog = cva('')

/**
 * DialogPortal wrapper **Class Variants** component
 *
 * const styles = dialogPortal({})
 *
 * @example
 * <DialogPortal className={styles())}>
 *   // button elements
 * </DialogPortal>
 */
export const dialogPortal = cva('')

/**
 * DialogOverlay wrapper **Class Variants** component
 *
 * const styles = dialogOverlay({})
 *
 * @example
 * <DialogOverlay className={styles())}>
 *   // button elements
 * </DialogOverlay>
 */
export const dialogOverlay = cva('fixed inset-0 z-50 bg-black/50')

/**
 * DialogClose wrapper **Class Variants** component
 *
 * const styles = dialogClose({})
 *
 * @example
 * <DialogClose className={styles())}>
 *   // button elements
 * </DialogClose>
 */
export const dialogClose = cva('absolute right-4 top-4 rounded-small opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none')

/**
 * DialogTrigger wrapper **Class Variants** component
 *
 * const styles = dialogTrigger({})
 *
 * @example
 * <DialogTrigger className={styles())}>
 *   // button elements
 * </DialogTrigger>
 */
export const dialogTrigger = cva('')

/**
 * DialogContent wrapper **Class Variants** component
 *
 * const styles = dialogContent({})
 *
 * @example
 * <DialogContent className={styles())}>
 *   // button elements
 * </DialogContent>
 */
export const dialogContent = cva('fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-full max-w-lg p-6 shadow-medium rounded-medium bg-default duration-200 data-[state=open]:animate-dialog-in')

/**
 * DialogHeader wrapper **Class Variants** component
 *
 * const styles = dialogHeader({})
 *
 * @example
 * <DialogHeader className={styles())}>
 *   // button elements
 * </DialogHeader>
 */
export const dialogHeader = cva('flex flex-col space-y-1.5 text-center sm:text-left')

/**
 * DialogFooter wrapper **Class Variants** component
 *
 * const styles = dialogFooter({})
 *
 * @example
 * <DialogFooter className={styles())}>
 *   // button elements
 * </DialogFooter>
 */
export const dialogFooter = cva('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2')

/**
 * DialogTitle wrapper **Class Variants** component
 *
 * const styles = dialogTitle({})
 *
 * @example
 * <DialogTitle className={styles())}>
 *   // button elements
 * </DialogTitle>
 */
export const dialogTitle = cva('text-large font-semibold leading-none tracking-tight')

/**
 * DialogDescription wrapper **Class Variants** component
 *
 * const styles = dialogDescription({})
 *
 * @example
 * <DialogDescription className={styles())}>
 *   // button elements
 * </DialogDescription>
 */
export const dialogDescription = cva('text-small')
