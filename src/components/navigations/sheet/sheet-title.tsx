import { cn, sheetTitle } from '@/tailwind'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import React from 'react'

export interface Props extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> {}
export interface Comp extends React.ElementRef<typeof SheetPrimitive.Title> {}

const SheetTitle = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(sheetTitle(), className)}
    {...props}
  />
))

SheetTitle.displayName = 'SheetTitle'

export default SheetTitle
