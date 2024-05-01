import React from 'react'
import type * as LabelPrimitive from '@radix-ui/react-label'
import { cn, label } from '@openui-org/theme'
import type { VariantProps } from '@openui-org/theme'
import { Slot } from '@radix-ui/react-slot'

interface Comp extends React.ElementRef<typeof LabelPrimitive.Root> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
  VariantProps<typeof label> {
  asChild?: boolean
}

const Label = React.forwardRef<Comp, Props>(({ className, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'label'
  return (
    <Comp
      className={cn(label({ size, className }))}
      ref={ref}
      {...props}
    />
  )
})

Label.displayName = 'Label'

export default Label
