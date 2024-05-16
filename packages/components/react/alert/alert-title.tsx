import type { VariantProps } from '@openui-org/theme'
import { alertTitle, cn } from '@openui-org/theme'
import React from 'react'

export interface Comp extends HTMLParagraphElement {}
export interface Props extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof alert> {}

const AlertTitle = React.forwardRef<Comp, Props>(({ className, size, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(alertTitle({ size }), className)}
    {...props}
  />
))

AlertTitle.displayName = 'AlertTitle'

export default AlertTitle
