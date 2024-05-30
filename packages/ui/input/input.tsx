import { cn, input } from '@openlabs/theme'
import type { VariantProps } from '@openlabs/theme'
import * as React from 'react'

export interface Comp extends HTMLInputElement {}
export interface Props extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps <typeof input> {
  labelText?: string
}

const Input = React.forwardRef<Comp, Props>(({ className, border, background, labelText, type, ...props }, ref) => {
  return (
    <div className="relative flex flex-col-reverse">
      <input
        type={type}
        className={cn(input({ border, background }), className)}
        ref={ref}
        {...props}
      />
      <label className="text-foreground/60 absolute top-1/2 -translate-y-1/2 left-4 px-1 bg-background pointer-events-none text-medium peer-focus-within:text-medium peer-focus-within:top-0 transition-all">{labelText}</label>
    </div>

  )
},
)

Input.displayName = 'Input'

export default Input
