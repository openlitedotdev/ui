import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn, sliderRange } from '@openlabs/theme'
import type { VariantProps } from '@openlabs/theme'

export interface Comp extends React.ElementRef<typeof SliderPrimitive.Range> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range>, VariantProps<typeof sliderRange> {}

const SliderRange = React.forwardRef<Comp, Props>(({ className, background, ...props }, ref) => (
  <SliderPrimitive.Range
    ref={ref}
    className={cn(sliderRange({ background }), className)}
    {...props}
  />
))

SliderRange.displayName = SliderPrimitive.Range.displayName

export default SliderRange
