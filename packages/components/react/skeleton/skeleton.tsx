import React from 'react'
import { cn, skeleton } from '@openui-org/theme'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function Skeleton({
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(skeleton(), className)}
      {...props}
    />
  )
}

export default Skeleton
