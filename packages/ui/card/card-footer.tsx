import type { VariantProps } from '@openlabs/theme'
import { cardFooter, cn } from '@openlabs/theme'
import React from 'react'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardFooter> {}

const CardFooter = React.forwardRef<Comp, Props>(({ className, padded, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardFooter({ padded }), className)}
    {...props}
  />
))

CardFooter.displayName = 'CardFooter'

export default CardFooter
