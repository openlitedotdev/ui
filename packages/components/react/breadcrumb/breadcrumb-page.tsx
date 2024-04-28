import { breadcrumbPage, cn } from '@openui-org/theme'
import React from 'react'

export interface Comp extends HTMLSpanElement {}
export interface Props extends React.ComponentPropsWithoutRef<'span'> {}

const BreadcrumbPage = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn(breadcrumbPage(), className)}
    {...props}
  />
))

BreadcrumbPage.displayName = 'BreadcrumbPage'

export default BreadcrumbPage
