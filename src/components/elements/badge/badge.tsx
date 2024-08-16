import React from 'react'
import type { VariantProps } from '@/tailwind'
import { badge, cn } from '@/tailwind'

export interface Comp extends HTMLDivElement {}
export type Props = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badge>

const Badge = React.forwardRef<Comp, Props>(({ className, variant, rounded, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(badge({ variant, rounded }), className)}
    {...props}
  />
))

Badge.displayName = 'Badge'

export default Badge
