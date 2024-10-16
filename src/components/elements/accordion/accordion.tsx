import type { VariantProps } from '@/tailwind'
import { accordion, cn } from '@/tailwind'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import React from 'react'

export interface Comp extends React.ElementRef<typeof AccordionPrimitive.Root> {}
export type Props = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & VariantProps<typeof accordion>

const Accordion = React.forwardRef<Comp, Props>(({ className, radius, bordered, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(accordion({ radius, bordered }), className)}
    {...props}
  />
))

Accordion.displayName = 'Accordion'

export default Accordion
