import { cardDescription, cn } from '@openlabs/theme'
import React from 'react'

export interface Comp extends HTMLParagraphElement {}
export interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(cardDescription(), className)}
    {...props}
  />
))

CardDescription.displayName = 'CardDescription'

export default CardDescription
