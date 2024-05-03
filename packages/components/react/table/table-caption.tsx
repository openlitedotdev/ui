import * as React from 'react'
import { cn, tableCaption } from '@openui-org/theme'

export interface Props extends React.HTMLAttributes<HTMLTableCaptionElement> {}
export interface Comp extends HTMLTableCaptionElement {}

const TableCaption = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(tableCaption(), className)}
    {...props}
  />
))
TableCaption.displayName = 'TableCaption'

export default TableCaption
