import { cardContent, cn } from '@openui-org/theme'
import React from 'react'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(cardContent(), className)} {...props} />
))

CardContent.displayName = 'CardContent'

export default CardContent
