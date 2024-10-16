import { cn, sheetDescription } from '@/tailwind'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

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
