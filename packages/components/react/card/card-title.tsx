import React from 'react'
import { cardTitle, cn } from '@openui-org/theme'

export interface Comp extends HTMLParagraphElement {}
export interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(cardTitle(), className)}
    {...props}
  />
))

CardTitle.displayName = 'CardTitle'

export default CardTitle
