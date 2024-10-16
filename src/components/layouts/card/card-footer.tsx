import type { VariantProps } from '@/tailwind'
import { cardFooter, cn } from '@/tailwind'
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
