import type { VariantProps } from '@/tailwind'
import { accordionTrigger, cn } from '@/tailwind'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

export interface Comp extends React.ElementRef<typeof AccordionPrimitive.Trigger> {}
export type Props = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & VariantProps<typeof accordionTrigger>

const AccordionTrigger = React.forwardRef<Comp, Props>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(accordionTrigger(), className)}
        {...props}
      >
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9s-4.419 6-6 6s-6-6-6-6" color="currentColor" /></svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

export default AccordionTrigger
