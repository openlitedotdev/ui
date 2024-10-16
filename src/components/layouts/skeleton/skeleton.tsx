import type { VariantProps } from '@/tailwind'
import { cn, skeleton } from '@/tailwind'
import React from 'react'

export interface Props extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof skeleton> {}

function Skeleton({
  className,
  rounded,
  children,
  ...props
}: Props) {
  return (
    <div
      className={cn(skeleton({ rounded }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Skeleton
