import { card, cn } from '@openui-org/theme'
import React from 'react'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(card(), className)}
    {...props}
  />
))

Card.displayName = 'Card'

export default Card
