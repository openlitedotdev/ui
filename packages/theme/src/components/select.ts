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
export const select = cva('')

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
export const selectTrigger = cva('flex h-10 w-64 items-center justify-between rounded-medium border border-input bg-background px-3 py-2 text-small ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1')

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
export const selectContent = cva('top-2 relative w-64 left-0 z-50 overflow-hidden rounded-medium border bg-popover text-popover-foreground shadow-medium data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2')

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
export const selectItem = cva('relative flex w-full cursor-default select-none items-center rounded-small py-1.5 px-8 text-small outline-none focus:bg-accent focus:text-accent-foreground hover:bg-foreground/5 data-[disabled]:pointer-events-none data-[disabled]:opacity-50')

/**
 * Select wrapper **Class Variants** component
 *
 * const styles = selectSeparator({})
 *
 * @example
 * <SelectSeparator role="group" className={styles())} />
 */
export const selectSeparator = cva('-mx-1 my-1 h-px bg-foreground/30')
