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
export const tabsList = cva('inline-flex w-full h-full items-center justify-center rounded-medium bg-muted p-1 text-muted-foreground')

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
export const tabsTrigger = cva('inline-flex w-1/2 items-center justify-center whitespace-nowrap rounded-small p-3 text-medium font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm')

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
export const tabsContent = cva('mt-2 p-3 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-medium border border-muted')
