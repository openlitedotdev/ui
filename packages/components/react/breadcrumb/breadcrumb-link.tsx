import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { breadcrumbLink, cn } from '@openui-org/theme'

export interface AsChild { asChild?: boolean }
export interface Comp extends HTMLAnchorElement {}
export interface Props extends React.ComponentPropsWithoutRef<'a'>, AsChild {}

const BreadcrumbLink = React.forwardRef<Comp, Props>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      ref={ref}
      className={cn(breadcrumbLink(), className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

export default BreadcrumbLink
