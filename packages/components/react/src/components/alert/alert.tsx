import { type VariantProps, alert, cn } from '@openui-org/theme'
import * as React from 'react'

interface Comp extends HTMLDivElement {}
interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alert> {}

const Alert = React.forwardRef<Comp, Props>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alert({ variant }), className)}
    {...props}
  />
))

Alert.displayName = 'Alert'

export default Alert
