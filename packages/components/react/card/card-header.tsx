import React from 'react'
import { cardHeader, cn } from '@openui-org/theme'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardHeader(), className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

export default CardHeader
