import React from 'react'
import type { VariantProps } from '@openlabs/theme'
import { cardTitle, cn } from '@openlabs/theme'

export interface Comp extends HTMLParagraphElement {}
export interface Props extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof cardTitle> {}

const CardTitle = React.forwardRef<Comp, Props>(({ className, size, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(cardTitle({ size }), className)}
    {...props}
  />
))

CardTitle.displayName = 'CardTitle'

export default CardTitle
