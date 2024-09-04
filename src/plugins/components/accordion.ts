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
export const accordion = cva('mt-2 p-3', {
  variants: {

    radius: {
      sm: 'rounded-small',
      md: 'rounded-medium',
      lg: 'rounded-large',
      none: 'rounded-none',
    },
    bordered: {
      sm: 'border-small',
      md: 'border-medium',
      lg: 'border-large',
      none: 'border-none',
    },
  },
  defaultVariants: {

    radius: 'md',
    bordered: 'none',
  },
})

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
export const accordionContent = cva('overflow-hidden text-small transition-all dropdown-out data-[state=open]:accordion-in')

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
export const accordionItem = cva('px-4 py-2 my-3 border-b border-default-300')

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
export const accordionTrigger = cva('flex flex-1 items-center justify-between py-2 font-medium transition-all hover:opacity-80 [&[data-state=open]>svg]:rotate-180', {
  variants: {
    text: {
      sm: 'text-small',
      md: 'text-medium',
      lg: 'text-large',
    },
  },
  defaultVariants: {
    text: 'md',
  },
})
