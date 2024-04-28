import { cva } from 'class-variance-authority'

/**
 * Accordion wrapper **Class Variants** component
 *
 * const styles = accordion({...})
 *
 * @example
 * <Accordion role="group" className={styles())}>
 *   // accordion elements
 * </Accordion>
 */
export const accordion = cva('')

/**
 * Accordion wrapper **Class Variants** component
 *
 * const styles = accordionContent({...})
 *
 * @example
 * <AccordionContent role="group" className={styles())}>
 *   // accordion elements
 * </AccordionContent>
 */
export const accordionContent = cva('overflow-hidden text-small transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down')

/**
 * Accordion wrapper **Class Variants** component
 *
 * const styles = accordionItem({...})
 *
 * @example
 * <AccordionItem role="group" className={styles())}>
 *   // accordion elements
 * </AccordionItem>
 */
export const accordionItem = cva('border-b px-4')

/**
 * Accordion wrapper **Class Variants** component
 *
 * const styles = accordionTrigger({...})
 *
 * @example
 * <AccordionTrigger role="group" className={styles())}>
 *   // accordion elements
 * </AccordionTrigger>
 */
export const accordionTrigger = cva('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180')
