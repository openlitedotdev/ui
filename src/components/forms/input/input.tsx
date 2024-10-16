import type { VariantProps } from '@/tailwind'
import { cn, input } from '@/tailwind'
import * as React from 'react'

export interface Comp extends HTMLInputElement {}
export interface Props extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps <typeof input> {}

const Input = React.forwardRef<Comp, Props>(({ className, rounded, border, type, ...props }, ref) => {
  return (
    <div className="relative flex flex-col-reverse">
      <input
        type={type}
        className={cn(input({ rounded, border }), className)}
        ref={ref}
        {...props}
      />
    </div>

  )
},
)

Input.displayName = 'Input'

export default Input
