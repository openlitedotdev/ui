import React from 'react'
import { cn } from '../lib/cn'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-full bg-muted', className)}
      {...props}
    />
  )
}

export { Skeleton }
