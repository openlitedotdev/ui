import React from 'react'
import type { VariantProps } from '@openui-org/theme'
import { badge, cn } from '@openui-org/theme'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badge> {}

const Badge = React.forwardRef<Comp, Props>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(badge({ variant }), className)}
    {...props}
  />
))

Badge.displayName = 'Badge'

export default Badge
