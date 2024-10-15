import { cva } from 'class-variance-authority'

/**
 * Dropdown wrapper **Class Variants** component
 *
 * const styles = dropdown({...})
 *
 * @example
 * <Dropdown className={styles())}>
 *   // accordion elements
 * </Dropdown>
 */
export const dropdown = cva('')

/**
 * Dropdown trigger **Class Variants** component
 *
 * const styles = dropdownTrigger({...})
 *
 * @example
 * <DropdownTrigger className={styles())}>
 *   // accordion elements
 * </DropdownTrigger>
 */
export const dropdownTrigger = cva('')

/**
 * Dropdown Group **Class Variants** component
 *
 * const styles = dropdownGroup({...})
 *
 * @example
 * <DropdownGroup className={styles())}>
 *   // accordion elements
 * </DropdownGroup>
 */
export const dropdownGroup = cva('')

/**
 * Dropdown Portal **Class Variants** component
 *
 * const styles = dropdownPortal({...})
 *
 * @example
 * <DropdownPortal className={styles())}>
 *   // accordion elements
 * </DropdownPortal>
 */
export const dropdownPortal = cva('')

/**
 * Dropdown Sub **Class Variants** component
 *
 * const styles = dropdownSub({...})
 *
 * @example
 * <DropdownSub className={styles())}>
 *   // accordion elements
 * </DropdownSub>
 */
export const dropdownSub = cva('')

/**
 * Dropdown RadioGroup **Class Variants** component
 *
 * const styles = dropdownRadioGroup({...})
 *
 * @example
 * <DropdownRadioGroup className={styles())}>
 *   // accordion elements
 * </DropdownRadioGroup>
 */
export const dropdownRadioGroup = cva('')

/**
 * Dropdown SubTrigger **Class Variants** component
 *
 * const styles = dropdownSubTrigger({...})
 *
 * @example
 * <DropdownSubTrigger className={styles())}>
 *   // accordion elements
 * </DropdownSubTrigger>
 */
export const dropdownSubTrigger = cva('flex cursor-default select-none items-center rounded-small px-2 py-1.5 text-small outline-none focus:bg-default/20 data-[state=open]:bg-default/20')

/**
 * Dropdown SubContent **Class Variants** component
 *
 * const styles = dropdownSubContent({...})
 *
 * @example
 * <DropdownSubContent className={styles())}>
 *   // accordion elements
 * </DropdownSubContent>
 */
export const dropdownSubContent = cva('z-50 min-w-[8rem] rounded-medium shadow-md py-3 px-3 bg-background data-[state=open]:animate-dropdown-in data-[state=closed]:animate-dropdown-out border border-default-300')

/**
 * Dropdown Content **Class Variants** component
 *
 * const styles = dropdownContent({...})
 *
 * @example
 * <DropdownContent className={styles())}>
 *   // accordion elements
 * </DropdownContent>
 */
export const dropdownContent = cva('z-50 min-w-56 border border-default-300 p-3 bg-background overflow-hidden rounded-medium data-[state=open]:animate-dropdown-in data-[state=closed]:animate-dropdown-out shadow-md data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=bottom]:slide-in-from-top-2')

/**
 * Dropdown Item **Class Variants** component
 *
 * const styles = dropdownItem({...})
 *
 * @example
 * <DropdownItem className={styles())}>
 *   // accordion elements
 * </DropdownItem>
 */
export const dropdownItem = cva('relative flex gap-2 w-full cursor-default select-none items-center hover:bg-default/20 rounded-medium px-2 py-1.5 mr-3 text-small outline-none transition-colors hover:cursor-pointer hover:transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50')

/**
 * Dropdown CheckboxItem **Class Variants** component
 *
 * const styles = dropdownCheckboxItem({...})
 *
 * @example
 * <DropdownCheckboxItem className={styles())}>
 *   // accordion elements
 * </DropdownCheckboxItem>
 */
export const dropdownCheckboxItem = cva('relative flex gap-2 cursor-default select-none items-center rounded-medium px-2 py-1.5 text-small outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50')

/**
 * Dropdown RadioItem **Class Variants** component
 *
 * const styles = dropdownRadioItem({...})
 *
 * @example
 * <DropdownRadioItem className={styles())}>
 *   // accordion elements
 * </DropdownRadioItem>
 */
export const dropdownRadioItem = cva('relative flex gap-2 cursor-default select-none items-center rounded-medium px-2 py-1.5 text-small outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50')

/**
 * Dropdown Separator **Class Variants** component
 *
 * const styles = dropdownSeparator({...})
 *
 * @example
 * <DropdownSeparator className={styles())}>
 *   // accordion elements
 * </DropdownSeparator>
 */
export const dropdownSeparator = cva('-mx-1 my-1 h-px mr-3 bg-default border-b border-default-300')

/**
 * Dropdown Label **Class Variants** component
 *
 * const styles = dropdownLabel({...})
 *
 * @example
 * <DropdownLabel className={styles())}>
 *   // accordion elements
 * </DropdownLabel>
 */
export const dropdownLabel = cva('px-2 py-1.5 text-small font-semibold')

/**
 * Dropdown Shortcut **Class Variants** component
 *
 * const styles = dropdownShortcut({...})
 *
 * @example
 * <DropdownShortcut className={styles())}>
 *   // accordion elements
 * </DropdownShortcut>
 */
export const dropdownShortcut = cva('ml-auto text-small tracking-widest opacity-60')
