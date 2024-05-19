import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn, dialogContent } from '@openui-org/theme'
import DialogOverlay from './dialog-overlay'
import DialogClose from './dialog-close'
import DialogPortal from './dialog-portal'

export interface Comp extends React.ElementRef<typeof DialogPrimitive.Content> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {}

const DialogContent = React.forwardRef<Comp, Props>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(dialogContent(), className)}
      {...props}
    >
      {children}
      <DialogClose>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn('lucide lucide-x size-5')}>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </DialogClose>
    </DialogPrimitive.Content>
  </DialogPortal>
))

DialogContent.displayName = DialogPrimitive.Content.displayName

export default DialogContent
