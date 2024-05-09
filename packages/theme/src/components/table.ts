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
export const table = cva('w-full caption-bottom text-sm rounded-large overflow-hidden')

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
export const tableHeader = cva('[&_th]:bg-foreground/20')

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
export const tableBody = cva('hover:[&_tr]:bg-foreground/10')

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
export const tableFooter = cva('[&_tr]:bg-foreground/20')

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
export const tableRow = cva('transition-colors')

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
export const tableHead = cva('h-12 px-4 text-left align-middle font-medium text-background-foreground [&:has([role=checkbox])]:pr-0')

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
export const tableCell = cva('h-12 px-4 text-left align-middle font-medium text-background-foreground [&:has([role=checkbox])]:pr-0')

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
export const tableCaption = cva('mt-4 text-sm text-background-foreground')
