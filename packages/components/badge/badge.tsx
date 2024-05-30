import React from 'react'
import type { VariantProps } from '@openlabs/theme'
import { badge, cn } from '@openlabs/theme'

export interface Comp extends HTMLDivElement {}
export type Props = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badge>

const Badge = React.forwardRef<Comp, Props>(({ className, color, shadow, outline, rounded, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(badge({ color, shadow, outline, rounded }), className)}
    {...props}
  />
))

Badge.displayName = 'Badge'

export default Badge
