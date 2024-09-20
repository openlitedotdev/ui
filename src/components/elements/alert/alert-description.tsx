import React from 'react'
import type { VariantProps } from '@/tailwind'
import { alertDescription, cn } from '@/tailwind'

export interface Comp extends HTMLParagraphElement {}
export interface Props extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof alert> {}

const AlertDescription = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(alertDescription(), className)}
    {...props}
  />
))

AlertDescription.displayName = 'AlertDescription'

export default AlertDescription
