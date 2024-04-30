import React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cn, label } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof LabelPrimitive.Root> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

const Label = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(label(), className)}
    {...props}
  />
))

Label.displayName = 'Label'

export default Label
