import React from 'react'
import { breadcrumbEllipsis, cn } from '@/tailwind'

export interface Comp extends React.ComponentProps<'span'> {}

function BreadcrumbEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn(breadcrumbEllipsis(), className)}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-horizontal h-4 w-4">
        <polyline points="18 8 22 12 18 16" />
        <polyline points="6 8 2 12 6 16" />
        <line x1="2" x2="22" y1="12" y2="12" />
      </svg>
      <span className="sr-only">More</span>
    </span>
  )
}

BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'

export default BreadcrumbEllipsis
