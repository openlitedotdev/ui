import React from 'react'
import { cn, sheetHeader } from '@openlabs/theme'

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
