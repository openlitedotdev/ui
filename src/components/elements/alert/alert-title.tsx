import React from 'react'
import type { VariantProps } from '@/tailwind'
import { alertTitle, cn } from '@/tailwind'

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
