import * as React from 'react'
import { cn, tableBody } from '@openui-org/theme'

export interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {}
export interface Comp extends HTMLTableSectionElement {}

const TableBody = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(tableBody(), className)}
    {...props}
  />
))

TableBody.displayName = 'TableBody'

export default TableBody
