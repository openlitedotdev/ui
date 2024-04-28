import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { accordionItem, cn } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof AccordionPrimitive.Item> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

const AccordionItem = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => {
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
