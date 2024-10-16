import type { VariantProps } from '@/tailwind'
import { alertTitle, cn } from '@/tailwind'
import React from 'react'

export interface Comp extends HTMLParagraphElement {}
export interface Props extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof alert> {}

const AlertTitle = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(alertTitle(), className)}
    {...props}
  />
))

AlertTitle.displayName = 'AlertTitle'

export default AlertTitle
