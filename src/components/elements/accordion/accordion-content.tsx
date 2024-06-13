import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { accordionContent, cn } from '@/tailwind'

export interface Comp extends React.ElementRef<typeof AccordionPrimitive.Content> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {}

const AccordionContent = React.forwardRef<Comp, Props>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(accordionContent(), className)}
      {...props}
    >
      <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
})

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export default AccordionContent
