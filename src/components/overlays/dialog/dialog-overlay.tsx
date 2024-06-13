import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn, dialogOverlay } from '@/tailwind'

export interface Comp extends React.ElementRef<typeof DialogPrimitive.Overlay> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {}

const DialogOverlay = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(dialogOverlay(), className)}
    {...props}
  />
))

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

export default DialogOverlay
