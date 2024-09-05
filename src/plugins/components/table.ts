import { cva } from 'class-variance-authority'

/**
 * Table wrapper **Class Variants** component
 *
 * const styles = table({...})
 *
 * @example
 * <Table role="group" className={styles())}>
 *   // Table elements
 * </Table>
 */
export const table = cva('w-full caption-bottom text-small rounded-lg overflow-hidden')

/**
 * Table wrapper **Class Variants** component
 *
 * const styles = tableHeader({...})
 *
 * @example
 * <tableHeader role="group" className={styles())}>
 *   // TableHeader elements
 * </tableHeader>
 */
export const tableHeader = cva('[&_tr]:border-b')

/**
 * Table wrapper **Class Variants** component
 *
 * const styles = tableBody({...})
 *
 * @example
 * <tableBody role="group" className={styles())}>
 *   // TableBody elements
 * </tableBody>
 */
export const tableBody = cva('&_tr:last-child]:border-0')

/**
 * Table wrapper **Class Variants** component
 *
 * const styles = tableFooter({...})
 *
 * @example
 * <TableFooter role="group" className={styles())}>
 *   // TableFooter elements
 * </TableFooter>
 */
export const tableFooter = cva('border-t font-medium [&>tr]:last:border-b-0')

/**
 * Table wrapper **Class Variants** component
 *
 * const styles = tableRow({...})
 *
 * @example
 * <TableRow role="group" className={styles())}>
 *   // TableRow elements
 * </TableRow>
 */
export const tableRow = cva('border-b transition-colors hover:bg-default-100')

/**
 * Table wrapper **Class Variants** component
 *
 * const styles = tableHead({...})
 *
 * @example
 * <TableHead role="group" className={styles())}>
 *   // TableHead elements
 * </TableHead>
 */
export const tableHead = cva('h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0')

/**
 * Table wrapper **Class Variants** component
 *
 * const styles = tableCell({...})
 *
 * @example
 * <TableCell role="group" className={styles())}>
 *   // TableCell elements
 * </TableCell>
 */
export const tableCell = cva('p-4 align-middle [&:has([role=checkbox])]:pr-0')

/**
 * Table wrapper **Class Variants** component
 *
 * const styles = tableCaption({...})
 *
 * @example
 * <TableCaption role="group" className={styles())}>
 *   // TableCaption elements
 * </TableCaption>
 */
export const tableCaption = cva('mt-4 text-small text-default-foreground')
