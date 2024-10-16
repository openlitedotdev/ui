import type { VariantProps } from '@/tailwind'
import { cn, label } from '@/tailwind'
import { Slot } from '@radix-ui/react-slot'
import React from 'react'

interface Comp extends HTMLLabelElement {}
export interface Props extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof label> {
  asChild?: boolean
}

const Label = React.forwardRef<Comp, Props>(
  ({ className, size, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'label'
    return (
      <Comp
        ref={ref}
        className={cn(label({ size, variant }), className)}
        {...props}
      />
    )
  },
)

Label.displayName = 'Label'

export default Label
