import React from 'react'
import { cn } from '@openui-org/theme'

export interface Comp extends HTMLHeadingElement {}
export interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const Title = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-4xl md:text-4xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50', className)}
    {...props}
  />
))

Title.displayName = 'Title'

export default Title
