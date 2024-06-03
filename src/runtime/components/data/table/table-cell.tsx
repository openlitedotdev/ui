import React from 'react'
import { cn, tableCell } from '@/tailwind'

export interface Props extends React.TdHTMLAttributes<HTMLTableCellElement> {}
export interface Comp extends HTMLTableCellElement {}

const TableCell = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      tableCell(),
      className,
    )}
    {...props}
  />
))

TableCell.displayName = 'TableCell'

export default TableCell
