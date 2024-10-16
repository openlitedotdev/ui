import { cn, sheetHeader } from '@/tailwind'
import React from 'react'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function SheetHeader({ className, ...props }: Props) {
  return (
    <div
      className={cn(sheetHeader(), className)}
      {...props}
    />
  )
}

export default SheetHeader
