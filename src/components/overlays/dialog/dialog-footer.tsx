import { cn, dialogFooter } from '@/tailwind'
import React from 'react'

export interface Comp extends React.HTMLAttributes<HTMLDivElement> {}

function DialogFooter({ className, ...props }: Comp) {
  return (
    <div
      className={cn(dialogFooter(), className)}
      {...props}
    />
  )
}

DialogFooter.displayName = 'DialogFooter'

export default DialogFooter
