import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn, sliderRange } from '@/tailwind'
import type { VariantProps } from '@/tailwind'

export interface Comp extends React.ElementRef<typeof SliderPrimitive.Range> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range>, VariantProps<typeof sliderRange> {}

const SliderRange = React.forwardRef<Comp, Props>(({ className, variant, ...props }, ref) => (
  <SliderPrimitive.Range
    ref={ref}
    className={cn(sliderRange({ variant }), className)}
    {...props}
  />
))

SliderRange.displayName = SliderPrimitive.Range.displayName

export default SliderRange
