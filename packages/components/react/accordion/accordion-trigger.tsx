import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { accordionTrigger, cn } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof AccordionPrimitive.Trigger> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {}

const AccordionTrigger = React.forwardRef<Comp, Props>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(accordionTrigger(), className)}
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
