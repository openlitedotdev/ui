import type { VariantProps } from '@openlabs/theme'
import React from 'react'
import { cardContent, cn } from '@openlabs/theme'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardContent> {}

const CardContent = React.forwardRef<Comp, Props>(({ className, padded, ...props }, ref) => (
  <div ref={ref} className={cn(cardContent({ padded }), className)} {...props} />
))

CardContent.displayName = 'CardContent'

export default CardContent
