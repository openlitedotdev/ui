import type { VariantProps } from 'tailwind-variants'

import { tv } from '../tailwind-variants'
import { dataFocusVisibleClasses } from '../styles'

/**
 * Accordion wrapper **Tailwind Variants** component
 *
 * const styles = accordion({...})
 *
 * @example
 * <div role="group" className={styles())}>
 *   // accordion elements
 * </div>
 */
const accordion = tv({
  base: 'px-2',
  variants: {
    variant: {
      light: '',
      shadow: 'px-4 shadow-medium rounded-medium',
      bordered: 'px-4 border-medium border-divider rounded-medium',
      splitted: 'group is-splitted flex flex-col gap-2',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'light',
    fullWidth: true,
  },
})

/**
 * AccordionItem wrapper **Tailwind Variants** component
 *
 * const {base, heading, indicator, trigger, startContent, title, subtitle, content } = accordionItem({...})
 *
 * @example
 * <div className={base())}>
 *   <div className={heading())}>
 *    <button className={trigger())}>
 *      <div className={startContent()}>
 *         // content
 *      </div>
 *      <div className={titleWrapper()}>
 *        <h3 className={title())}>Title</h3>
 *        <span className={subtitle())}>Subtitle</span>
 *      </div>
 *      <span className={indicator())}>Indicator</span>
 *    </button>
 *  </div>
 *  <div className={content())}>Content</div>
 * </div>
 */

const accordionItem = tv({
  slots: {
    base: [
      'group-[.is-splitted]:px-4',
      'group-[.is-splitted]:shadow-medium',
      'group-[.is-splitted]:rounded-medium',
    ],
    trigger: [
      'flex py-4 w-full h-full gap-3 outline-none items-center tap-highlight-transparent',
      ...dataFocusVisibleClasses,
    ],
    startContent: 'flex-shrink-0',
    indicator: 'text-default',
    titleWrapper: 'flex-1 flex flex-col text-start',
    title: 'text-foreground text-large',
    subtitle: 'text-small text-foreground font-normal',
    content: 'py-2',
  },
  variants: {
    indicator: {
      true: {
        indicator: 'hidden',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    radius: 'lg',
    indicator: false,
  },
})

export type AccordionGroupVariantProps = VariantProps<typeof accordion>
export type AccordionItemSlots = keyof ReturnType<typeof accordionItem>
export type AccordionItemVariantProps = VariantProps<typeof accordionItem>

export { accordion, accordionItem }
