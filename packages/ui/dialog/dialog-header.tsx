import { cn, dialogHeader } from '@openlabs/theme'
import React from 'react'

export interface Comp extends React.HTMLAttributes<HTMLDivElement> {}

function DialogHeader({ className, ...props }: Comp) {
  return (
    <div
      className={cn(dialogHeader(), className)}
      {...props}
    />
  )
}

DialogHeader.displayName = 'DialogHeader'

export default DialogHeader
