import { alert, cn, type VariantProps } from '@/tailwind'
import * as React from 'react'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alert> {}

const Alert = React.forwardRef<Comp, Props>(({
  className,
  variant,
  rounded,
  ...props
}, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alert({ variant, rounded }), className)}
    {...props}
  />
))

Alert.displayName = 'Alert'

export default Alert
