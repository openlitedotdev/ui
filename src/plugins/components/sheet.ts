import { cva } from 'class-variance-authority'

/**
 * Sheet wrapper **Class Variants** component
 *
 * const styles = sheet({})
 *
 * @example
 * <Sheet role="group" className={styles())}>
 *   // Sheet elements
 * </Sheet>
 */
export const sheet = cva('')

/**
 * Sheet wrapper **Class Variants** component
 *
 * const styles = sheetClose({})
 *
 * @example
 * <SheetClose role="group" className={styles())}>
 *   // SheetClose elements
 * </SheetClose>
 */
export const sheetClose = cva('')

/**
 * Sheet wrapper **Class Variants** component
 *
 * const styles = sheetPortal({})
 *
 * @example
 * <SheetPortal role="group" className={styles())}>
 *   // SheetPortal elements
 * </SheetPortal>
 */
export const sheetPortal = cva('')

/**
 * Sheet wrapper **Class Variants** component
 *
 * const styles = sheetTrigger({})
 *
 * @example
 * <SheetTrigger role="group" className={styles())}>
 *   // SheetTrigger elements
 * </SheetTrigger>
 */
export const sheetTrigger = cva('')

/**
 * Sheet wrapper **Class Variants** component
 *
 * const styles = sheetOverlay({})
 *
 * @example
 * <SheetOverlay role="group" className={styles())}>
 *   // SheetOverlay elements
 * </SheetOverlay>
 */
export const sheetOverlay = cva('fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0')

/**
 * Sheet wrapper **Class Variants** component
 *
 * const styles = sheetContent({})
 *
 * @example
 * <SheetContent role="group" className={styles())}>
 *   // SheetContent elements
 * </SheetContent>
 */
export const sheetContent = cva('fixed z-50 bg-background border-foreground/20 gap-4 p-6 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500', {
  variants: {
    side: {
      top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
      bottom:
        'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
      left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
      right:
        'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
    },
    shadow: {
      none: 'shadow-none',
      sm: 'shadow-small',
      md: 'shadow-medium',
      lg: 'shadow-large',
    },
  },
  defaultVariants: {
    side: 'right',
    shadow: 'none',
  },
})

/**
 * Sheet wrapper **Class Variants** component
 *
 * const styles = sheetHeader({})
 *
 * @example
 * <SheetHeader role="group" className={styles())}>
 *   // SheetHeader elements
 * </SheetHeader>
 */
export const sheetHeader = cva('flex flex-col space-y-2 text-center sm:text-left')

/**
 * Sheet wrapper **Class Variants** component
 *
 * const styles = sheetFooter({})
 *
 * @example
 * <SheetFooter role="group" className={styles())}>
 *   // SheetFooter elements
 * </SheetFooter>
 */
export const sheetFooter = cva('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2')

/**
 * Sheet wrapper **Class Variants** component
 *
 * const styles = sheetTitle({})
 *
 * @example
 * <SheetTitle role="group" className={styles())}>
 *   // SheetTitle elements
 * </SheetTitle>
 */
export const sheetTitle = cva('text-lg font-semibold text-foreground')

/**
 * Sheet wrapper **Class Variants** component
 *
 * const styles = sheetDescription({})
 *
 * @example
 * <SheetDescription role="group" className={styles())}>
 *   // SheetDescription elements
 * </SheetDescription>
 */
export const sheetDescription = cva('text-small text-foreground')
