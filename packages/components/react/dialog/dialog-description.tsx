import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn, dialogDescription } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof DialogPrimitive.Description> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {}

const DialogDescription = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(dialogDescription(), className)}
    {...props}
  />
))

DialogDescription.displayName = DialogPrimitive.Description.displayName

export default DialogDescription
