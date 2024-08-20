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
export const tabsList = cva('inline-flex w-full p-2 h-fit items-center justify-center rounded-medium bg-default-100')

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
export const tabsTrigger = cva('inline-flex w-fill items-center justify-center whitespace-nowrap rounded-medium p-3 text-medium font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-white data-[state=active]:shadow-sm', {
  variants: {
    varinat: {
      none: 'data-[state=active]:bg-white data-[state=active]:dark:bg-black',
      default: 'data-[state=active]:bg-default',
      primary: 'data-[state=active]:bg-primary',
      success: 'data-[state=active]:bg-success',
      error: 'data-[state=active]:bg-error',
      warn: 'data-[state=active]:bg-warn',
    },
  },
  defaultVariants: {
    varinat: 'none',
  },
})

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
export const tabsContent = cva('mt-2 w-full p-2 h-fit ring-offset-background bg-default-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-medium border border-default-100')
