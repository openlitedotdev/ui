import * as React from 'react'

import { cn } from '../lib/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-dark-100/50 px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-dark-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ring-offset-dark-100 focus-visible:ring-2 focus-visible:ring-dark-100/50 focus-visible:ring-offset-white dark:focus-visible:ring-offset-white',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
},
)

Input.displayName = 'Input'

export { Input }
