import { cn, tableBody } from '@/tailwind'
import * as React from 'react'

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
