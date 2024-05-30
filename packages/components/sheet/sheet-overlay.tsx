import React from 'react'
import { cn, sheetOverlay } from '@openlabs/theme'
import * as SheetPrimitive from '@radix-ui/react-dialog'

export interface Props extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> {}
export interface Comp extends React.ElementRef<typeof SheetPrimitive.Overlay> {}

const SheetOverlay = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(sheetOverlay(), className)}
    {...props}
    ref={ref}
  />
))

SheetOverlay.displayName = 'SheetOverlay'

export default SheetOverlay
