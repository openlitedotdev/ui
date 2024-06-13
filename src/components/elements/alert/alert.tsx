import * as React from 'react'
import { type VariantProps, alert, cn } from '@/tailwind'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alert> {}

const Alert = React.forwardRef<Comp, Props>(({
  className,
  background,
  shadow,
  outline,
  rounded,
  ...props
}, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alert({ background, shadow, rounded, outline }), className)}
    {...props}
  />
))

Alert.displayName = 'Alert'

export default Alert
