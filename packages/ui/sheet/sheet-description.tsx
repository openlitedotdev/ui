import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cn, sheetDescription } from '@openlabs/theme'

export interface Props extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> {}
export interface Comp extends React.ElementRef<typeof SheetPrimitive.Description> {}

const SheetDescription = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn(sheetDescription(), className)}
    {...props}
  />
))

SheetDescription.displayName = 'SheetDescription'

export default SheetDescription
