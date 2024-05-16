import React from 'react'
import type { VariantProps } from '@openui-org/theme'
import { alertDescription, cn } from '@openui-org/theme'

export interface Comp extends HTMLParagraphElement {}
export interface Props extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof alert> {}

const AlertDescription = React.forwardRef<Comp, Props>(({ className, size, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(alertDescription({ size }), className)}
    {...props}
  />
))

AlertDescription.displayName = 'AlertDescription'

export default AlertDescription
