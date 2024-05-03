import * as React from 'react'
import { cn, table } from '@openui-org/theme'

export interface Props extends React.HTMLAttributes<HTMLTableElement> {}
export interface Comp extends HTMLTableElement {}

const Table = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn(table(), className)}
      {...props}
    />
  </div>
))

Table.displayName = 'Table'

export default Table
