import React from 'react'
import { cn, tableRow } from '@openui-org/theme'

export interface Props extends React.HTMLAttributes<HTMLTableRowElement> {}
interface Comp extends HTMLTableRowElement {}

const TableRow = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => {
  return (
    <tr
      ref={ref}
      className={cn(
        tableRow(),
        className,
      )}
      {...props}
    />
  )
},
)

TableRow.displayName = 'TableRow'

export default TableRow
