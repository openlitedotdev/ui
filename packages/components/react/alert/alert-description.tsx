import React from 'react'
import { alertDescription, cn } from '@openui-org/theme'

export interface Comp extends HTMLParagraphElement {}
export interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

const AlertDescription = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(alertDescription(), className)}
    {...props}
  />
))

AlertDescription.displayName = 'AlertDescription'

export default AlertDescription
