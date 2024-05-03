import { cardFooter, cn } from '@openui-org/theme'
import React from 'react'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardFooter(), className)}
    {...props}
  />
))

CardFooter.displayName = 'CardFooter'

export default CardFooter
