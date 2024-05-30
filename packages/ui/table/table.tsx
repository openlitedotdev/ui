import * as React from 'react'
import { cn, table } from '@openlabs/theme'
import type { VariantProps } from '@openlabs/theme'
import { Slot } from '@radix-ui/react-slot'

export interface Props extends React.HTMLAttributes<HTMLTableElement>,
  VariantProps<typeof table> {
  asChild?: boolean
  children?: React.ReactNode
}
interface Comp extends HTMLTableElement {}

const Table = React.forwardRef<Comp, Props>(({ className, children, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'table'
  return (
    <div className="relative w-full overflow-auto p-4">
      <Comp
        ref={ref}
        className={cn(table(), className)}
        {...props}
      >
        {children}
      </Comp>
    </div>
  )
})

Table.displayName = 'Table'

export default Table
