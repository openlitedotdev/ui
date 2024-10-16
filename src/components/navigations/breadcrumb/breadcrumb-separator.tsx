import { breadcrumbSeparator, cn } from '@/tailwind'
import React from 'react'

export interface Comp extends React.ComponentProps<'li'> {}

function BreadcrumbSeparator({ children, className, ...props }: Comp) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn(breadcrumbSeparator(), className)}
      {...props}
    >
      {children ?? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg> }
    </li>
  )
}

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

export default BreadcrumbSeparator
