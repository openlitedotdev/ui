import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { breadcrumbLink, cn } from '@openui-org/theme'

export interface Comp extends HTMLAnchorElement {}
export interface Props extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
}

const BreadcrumbLink = React.forwardRef<Comp, Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a'
    return (
      <Comp
        className={cn(breadcrumbLink({ className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

BreadcrumbLink.displayName = 'BreadcrumbLink'

export default BreadcrumbLink
