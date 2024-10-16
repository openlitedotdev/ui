import type { VariantProps } from '@/tailwind'
import { cn, selectContent } from '@/tailwind'
import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'
import SelectScrollUpButton from './select-scroll-button'
import SelectScrollDownButton from './select-scroll-down'

export interface Props extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
  VariantProps<typeof selectContent> {}
export interface Comp extends React.ElementRef<typeof SelectPrimitive.Content> {}

const SelectContent = React.forwardRef<Comp, Props>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        selectContent(),
        position === 'popper'
        && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper'
          && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))

SelectContent.displayName = 'SelectContent'

export default SelectContent
