import * as React from 'react'
import { cn, input } from '@/tailwind'
import type { VariantProps } from '@/tailwind'

export interface Comp extends HTMLInputElement {}
export interface Props extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps <typeof input> {
  labelText?: string
}

const Input = React.forwardRef<Comp, Props>(({ className, rounded, icons, variant, labelText, type, ...props }, ref) => {
  return (
    <div className="relative flex flex-col-reverse">
      <input
        type={type}
        className={cn(input({ variant, icons, rounded }), className)}
        ref={ref}
        {...props}
      />
      <label className="absolute top-0 -translate-y-1/2 left-4 pointer-events-none text-small backdrop-blur-sm px-1">{ labelText }</label>
    </div>

  )
},
)

Input.displayName = 'Input'

export default Input
