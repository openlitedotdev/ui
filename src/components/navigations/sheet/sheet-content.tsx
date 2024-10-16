import type { VariantProps } from '@/tailwind'
import { cn, sheetContent } from '@/tailwind'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import React from 'react'
import SheetOverlay from './sheet-overlay'
import SheetPortal from './sheet-portal'

export interface Props extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
  VariantProps<typeof sheetContent> {
  side?: 'left' | 'right'
}

export interface Comp extends React.ElementRef<typeof SheetPrimitive.Content> {}

const SheetContent = React.forwardRef<Comp, Props>(({ side = 'right', shadow, className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetContent({ side, shadow }), className)}
      {...props}
    >
      <div className="relative">
        {children}
        <SheetPrimitive.Close className="absolute right-0 top-0 rounded-small opacity-80 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none px-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </SheetPrimitive.Close>
      </div>
    </SheetPrimitive.Content>
  </SheetPortal>
))

SheetContent.displayName = 'SheetContent'

export default SheetContent
