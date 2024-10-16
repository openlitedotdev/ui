import { cn, tableHeader } from '@/tailwind'
import React from 'react'

export interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {}
export interface Comp extends HTMLTableSectionElement {}

const TableHeader = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn(tableHeader(), className)} {...props} />
))

TableHeader.displayName = 'TableHeader'

export default TableHeader
