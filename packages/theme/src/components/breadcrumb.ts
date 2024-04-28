import { cva } from 'class-variance-authority'

/**
 * Breadcrumb wrapper **Class Variants** component
 *
 * const styles = breadcrumb({})
 *
 * @example
 * <Breadcrumb role="nav" className={styles())}>
 *   // alert elements
 * </Breadcrumb>
 */
export const breadcrumb = cva('')

/**
 * Breadcrumb wrapper **Class Variants** component
 *
 * const styles = breadcrumbList({})
 *
 * @example
 * <BreadcrumbList role="nav" className={styles())}>
 *   // alert elements
 * </BreadcrumbList>
 */
export const breadcrumbList = cva('flex flex-wrap items-center gap-1.5 break-words text-small sm:gap-2.5')

/**
 * Breadcrumb wrapper **Class Variants** component
 *
 * const styles = breadcrumbItem({})
 *
 * @example
 * <BreadcrumbItem role="nav" className={styles())}>
 *   // alert elements
 * </BreadcrumbItem>
 */
export const breadcrumbItem = cva('inline-flex items-center gap-1.5')

/**
 * Breadcrumb wrapper **Class Variants** component
 *
 * const styles = breadcrumbLink({})
 *
 * @example
 * <BreadcrumbLink role="nav" className={styles())}>
 *   // alert elements
 * </BreadcrumbLink>
 */
export const breadcrumbLink = cva('transition-colors')

/**
 * Breadcrumb wrapper **Class Variants** component
 *
 * const styles = breadcrumbPage({})
 *
 * @example
 * <BreadcrumbPage role="nav" className={styles())}>
 *   // alert elements
 * </BreadcrumbPage>
 */
export const breadcrumbPage = cva('font-normal')

/**
 * Breadcrumb wrapper **Class Variants** component
 *
 * const styles = breadcrumbSeparator({})
 *
 * @example
 * <BreadcrumbSeparator role="nav" className={styles())}>
 *   // alert elements
 * </BreadcrumbSeparator>
 */
export const breadcrumbSeparator = cva('[&>svg]:size-3.5')

/**
 * Breadcrumb wrapper **Class Variants** component
 *
 * const styles = breadcrumbEllipsis({})
 *
 * @example
 * <BreadcrumbEllipsis role="nav" className={styles())}>
 *   // alert elements
 * </BreadcrumbEllipsis>
 */
export const breadcrumbEllipsis = cva('flex size-9 items-center justify-center')
