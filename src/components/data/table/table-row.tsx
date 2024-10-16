import { cn, tableRow } from '@/tailwind'
import React from 'react'

export interface Props extends React.HTMLAttributes<HTMLTableRowElement> {}
export interface Comp extends HTMLTableRowElement {}

const TableRow = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      tableRow(),
      className,
    )}
    {...props}
  />
))

TableRow.displayName = 'TableRow'

export default TableRow
