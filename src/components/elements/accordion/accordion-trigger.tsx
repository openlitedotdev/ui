import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type { VariantProps } from '@/tailwind'
import { accordionTrigger, cn } from '@/tailwind'

export interface Comp extends React.ElementRef<typeof AccordionPrimitive.Trigger> {}
export type Props = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & VariantProps<typeof accordionTrigger>

const AccordionTrigger = React.forwardRef<Comp, Props>(({ className, text, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(accordionTrigger({ text }), className)}
        {...props}
      >
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6" /></svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

export default AccordionTrigger
