import React from 'react'
import { cn, sheetFooter } from '@openui-org/theme'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function SheetFooter({ className, ...props }: Props) {
  return (
    <div
      className={cn(sheetFooter(), className)}
      {...props}
    />
  )
}

export default SheetFooter
