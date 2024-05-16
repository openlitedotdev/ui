import { cva } from 'class-variance-authority'

/**
 * Select wrapper **Class Variants** component
 *
 * const styles = select({})
 *
 * @example
 * <Select role="group" className={styles())}>
 *   // Select elements
 * </Select>
 */
export const select = cva()

/**
 * Select wrapper **Class Variants** component
 *
 * const styles = selectGroup({})
 *
 * @example
 * <SelectGroup role="group" className={styles())}>
 *   // SelectGroup elements
 * </SelectGroup>
 */
export const selectGroup = cva('')

/**
 * Select wrapper **Class Variants** component
 *
 * const styles = selectValue({})
 *
 * @example
 * <SelectValue role="group" className={styles())}>
 *   // SelectValue elements
 * </SelectValue>
 */
export const selectValue = cva('')

/**
 * Select wrapper **Class Variants** component
 *
 * const styles = selectTrigger({})
 *
 * @example
 * <SelectTrigger role="group" className={styles())}>
 *   // SelectTrigger elements
 * </SelectTrigger>
 */
export const selectTrigger = cva('flex relative bg-background dark:bg-white/10 h-10 w-64 items-center justify-between rounded-medium px-3 py-2 text-small ring-offset-transparent focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1', {
  variants: {
    shadow: {
      sm: 'shadow-small',
      md: 'shadow-medium',
      lg: 'shadow-large',
    },
  },
  defaultVariants: {
    shadow: 'sm',
  },
})

/**
 * Select wrapper **Class Variants** component
 *
 * const styles = selectScrollUpButton({})
 *
 * @example
 * <SelectScrollUpButton role="group" className={styles())}>
 *   // SelectScrollUpButton elements
 * </SelectScrollUpButton>
 */
export const selectScrollUpButton = cva('flex cursor-default items-center justify-center py-1')

/**
 * Select wrapper **Class Variants** component
 *
 * const styles = SelectScrollDownButton({})
 *
 * @example
 * <SelectScrollDownButton role="group" className={styles())}>
 *   // SelectScrollDownButton elements
 * </SelectScrollDownButton>
 */
export const selectScrollDownButton = cva('flex cursor-default items-center justify-center py-1')

/**
 * Select wrapper **Class Variants** component
 *
 * const styles = selectContent({})
 *
 * @example
 * <SelectContent role="group" className={styles())}>
 *   // SelectContent elements
 * </SelectContent>
 */
export const selectContent = cva('relative top-1 w-64 bg-background dark:bg-white/10 left-0 z-50 overflow-hidden rounded-medium shadow-medium data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2')

/**
 * Select wrapper **Class Variants** component
 *
 * const styles = selectLabel({})
 *
 * @example
 * <SelectLabel role="group" className={styles())}>
 *   // SelectLabel elements
 * </SelectLabel>
 */
export const selectLabel = cva('py-1.5 px-8 text-small font-semibold')

/**
 * Select wrapper **Class Variants** component
 *
 * const styles = selectItem({})
 *
 * @example
 * <SelectItem role="group" className={styles())}>
 *   // SelectItem elements
 * </SelectItem>
 */
export const selectItem = cva('relative flex w-full cursor-default select-none items-center rounded-small py-1.5 px-8 text-small outline-none hover:bg-neutral data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus-within:bg-neutral')

/**
 * Select wrapper **Class Variants** component
 *
 * const styles = selectSeparator({})
 *
 * @example
 * <SelectSeparator role="group" className={styles())} />
 */
export const selectSeparator = cva('-mx-1 my-1 h-px bg-neutral')
