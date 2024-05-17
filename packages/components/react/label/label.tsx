import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from '@openui-org/theme'
import { cn, label } from '@openui-org/theme'

interface Comp extends HTMLLabelElement {}
export interface Props extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof label> {
  asChild?: boolean
}

const Label = React.forwardRef<Comp, Props>(
  ({ className, size, textColor, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'label'
    return (
      <Comp
        ref={ref}
        className={cn(label({ size, textColor }), className)}
        {...props}
      />
    )
  },
)

Label.displayName = 'Label'

export default Label
