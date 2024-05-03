import React from 'react'
import { cn, tableHead } from '@openui-org/theme'

export interface Props extends React.ThHTMLAttributes<HTMLTableCellElement> {}
export interface Comp extends HTMLTableCellElement {}

const TableHead = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      tableHead(),
      className,
    )}
    {...props}
  />
))

TableHead.displayName = 'TableHead'

export default TableHead
