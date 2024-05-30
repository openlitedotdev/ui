import React from 'react'
import type { VariantProps } from '@openlabs/theme'
import { cardHeader, cn } from '@openlabs/theme'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardHeader> {}

const CardHeader = React.forwardRef<Comp, Props>(({ className, padded, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardHeader({ padded }), className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

export default CardHeader
