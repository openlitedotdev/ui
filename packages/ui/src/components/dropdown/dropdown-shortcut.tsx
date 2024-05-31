import React from 'react'
import { cn, dropdownShortcut } from '@openlabs/theme'

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {}

function DropdownShortcut({ className, ...props }: Props) {
  return (
    <span
      className={cn(dropdownShortcut(), className)}
      {...props}
    />
  )
}

DropdownShortcut.displayName = 'DropdownShortcut'

export default DropdownShortcut
