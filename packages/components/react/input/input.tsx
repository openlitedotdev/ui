import { cn, input } from '@openui-org/theme'
import type { VariantProps } from '@openui-org/theme'
import * as React from 'react'

export interface Comp extends HTMLInputElement {}
export interface Props extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps <typeof input> {
  Label?: string
  Icon?: React.ReactNode
}

const Input = React.forwardRef<Comp, Props>(({ className, border, background, text, Label, Icon, type, ...props }, ref) => {
  return (
    <div className="relative flex flex-col-reverse">
      <input
        type={type}
        className={cn(input({ border, background, text }), className)}
        ref={ref}
        {...props}
      />
      <label className="text-foreground/60 absolute top-1/2 -translate-y-1/2 left-4 px-1 bg-background pointer-events-none text-medium peer-focus-within:text-medium peer-focus-within:top-0 transition-all">{Label}</label>
      <i className="absolute top-1/2 -translate-y-1/2 right-3">{Icon}</i>
    </div>

  )
},
)

Input.displayName = 'Input'

export default Input
