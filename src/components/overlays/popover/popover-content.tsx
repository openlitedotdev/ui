import type { VariantProps } from '@/tailwind'
import { cn, popoverContent } from '@/tailwind'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import React from 'react'

export interface Props extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>, VariantProps<typeof popoverContent> {}
export interface Comp extends React.ElementRef<typeof PopoverPrimitive.Content> {}

const PopoverContent = React.forwardRef<Comp, Props>(({ className, shadow, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        popoverContent({ shadow }),
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = 'PopoverContent'

export default PopoverContent
