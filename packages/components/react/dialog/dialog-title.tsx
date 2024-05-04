import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn, dialogTitle } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof DialogPrimitive.Title> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {}

const DialogTitle = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(dialogTitle(), className)}
    {...props}
  />
))

DialogTitle.displayName = DialogPrimitive.Title.displayName

export default DialogTitle
