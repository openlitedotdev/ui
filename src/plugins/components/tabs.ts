import { cva } from 'class-variance-authority'

/**
 * Tabs wrapper **Class Variants** component
 *
 * const styles = tabs({...})
 *
 * @example
 * <Tabs role="group" className={styles())}>
 *   // Tabs elements
 * </Tabs>
 */
export const tabs = cva('')

/**
 * Tabs wrapper **Class Variants** component
 *
 * const styles = tabsList({...})
 *
 * @example
 * <TabsList role="group" className={styles())}>
 *   // TabsList elements
 * </TabsList>
 */
export const tabsList = cva('inline-flex rounded-medium w-full p-2 h-fit items-center justify-center bg-default-100')

/**
 * Tabs wrapper **Class Variants** component
 *
 * const styles = tabsTrigger({...})
 *
 * @example
 * <TabsTrigger role="group" className={styles())}>
 *   // TabsTrigger elements
 * </TabsTrigger>
 */
export const tabsTrigger = cva('inline-flex w-full items-center justify-center whitespace-nowrap rounded-medium p-3 text-medium font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:rounded-medium data-[state=active]:bg-background data-[state=active]:text-foreground')

/**
 * Tabs wrapper **Class Variants** component
 *
 * const styles = tabsContent({...})
 *
 * @example
 * <TabsContent role="group" className={styles())}>
 *   // TabsContent elements
 * </TabsContent>
 */
export const tabsContent = cva('mt-2 w-full p-2 h-fit ring-offset-background bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-medium border border-default-300')
