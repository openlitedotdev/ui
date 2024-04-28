import { alertTitle, cn } from '@openui-org/theme'
import React from 'react'

interface Comp extends HTMLParagraphElement {}
interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const AlertTitle = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(alertTitle(), className)}
    {...props}
  />
))

AlertTitle.displayName = 'AlertTitle'

export default AlertTitle
