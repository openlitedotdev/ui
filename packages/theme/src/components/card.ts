import { cva } from 'class-variance-authority'

/**
 * Card wrapper **Class Variants** component
 *
 * const styles = card({...})
 *
 * @example
 * <Card className={styles())}>
 *   // accordion elements
 * </Card>
 */
export const card = cva('rounded-large border shadow-small')

/**
 * Card wrapper **Class Variants** component
 *
 * const styles = cardHeader({...})
 *
 * @example
 * <CardHeader className={styles())}>
 *   // accordion elements
 * </CardHeader>
 */
export const cardHeader = cva('flex flex-col space-y-1.5 p-6')

/**
 * Card wrapper **Class Variants** component
 *
 * const styles = cardTitle({...})
 *
 * @example
 * <CardTitle className={styles())}>
 *   // accordion elements
 * </CardTitle>
 */
export const cardTitle = cva('font-semibold leading-none tracking-tight')

/**
 * Card wrapper **Class Variants** component
 *
 * const styles = cardDescription({...})
 *
 * @example
 * <CardDescription className={styles())}>
 *   // accordion elements
 * </CardDescription>
 */
export const cardDescription = cva('text-small')

/**
 * Card wrapper **Class Variants** component
 *
 * const styles = cardContent({...})
 *
 * @example
 * <CardContent className={styles())}>
 *   // accordion elements
 * </CardContent>
 */
export const cardContent = cva('p-6 pt-0')

/**
 * Card wrapper **Class Variants** component
 *
 * const styles = cardFooter({...})
 *
 * @example
 * <cardFooter className={styles())}>
 *   // accordion elements
 * </cardFooter>
 */
export const cardFooter = cva('flex items-center p-6 pt-0')
