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
export const dialogOverlay = cva('fixed inset-0 z-50 bg-black/70  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0')

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
export const dialogClose = cva('absolute right-4 top-4 rounded-small opacity-70  transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none')

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
export const dialogContent = cva('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-large duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg')

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
