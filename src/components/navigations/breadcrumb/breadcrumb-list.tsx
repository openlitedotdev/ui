import { breadcrumbList, cn } from '@/tailwind'
import React from 'react'

export interface Comp extends HTMLOListElement {}
export interface Props extends React.ComponentPropsWithoutRef<'ol'> {}

const BreadcrumbList = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(breadcrumbList(), className)}
    {...props}
  />
))

BreadcrumbList.displayName = 'BreadcrumbList'

export default BreadcrumbList
