import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type { VariantProps } from '@/tailwind'
import { accordionItem, cn } from '@/tailwind'

export interface Comp extends React.ElementRef<typeof AccordionPrimitive.Item> {}
export type Props = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & VariantProps<typeof accordionItem>

const AccordionItem = React.forwardRef<Comp, Props>(({
  className,
  ...props
}, ref) => {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(accordionItem(), className)}

      {...props}
    />
  )
})

AccordionItem.displayName = 'AccordionItem'

export default AccordionItem
