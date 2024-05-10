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
    shadow: {
      sm: 'shadow-small',
      md: 'shadow-medium',
      lg: 'shadow-large',
      none: 'shadow-none',
    },
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
    shadow: 'none',
    radius: 'sm',
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
export const accordionItem = cva('px-4 py-2 my-3', {
  variants: {
    color: {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      warn: 'bg-warn text-warn-foreground hover:bg-warn/90',
      success: 'bg-success text-success-foreground hover:bg-success/90',
      error: 'bg-error text-error-foreground hover:bg-error/90',
      none: 'bg-transparent',
    },
    shadow: {
      sm: 'shadow-small',
      md: 'shadow-medium',
      lg: 'shadow-large',
      none: 'shadow-none',
    },
    radius: {
      sm: 'rounded-small',
      md: 'rounded-medium',
      lg: 'rounded-large',
      none: 'rounded-none',
    },
    separator: {
      sm: 'border-b-small',
      md: 'border-b-medium',
      lg: 'border-b-large',
      none: 'border-b-none',
    },
  },
  defaultVariants: {
    shadow: 'none',
    radius: 'none',
    color: 'none',
    separator: 'none',
  },
})

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
