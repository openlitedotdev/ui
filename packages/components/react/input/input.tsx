import { cn, input } from '@openui-org/theme'
import * as React from 'react'

export interface Comp extends HTMLInputElement {}
export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<Comp, Props>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(input(), className)}
      ref={ref}
      {...props}
    />
  )
},
)

Input.displayName = 'Input'

export default Input
