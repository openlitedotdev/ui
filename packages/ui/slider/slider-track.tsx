import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn, sliderTrack } from '@openlabs/theme'

export interface Comp extends React.ElementRef<typeof SliderPrimitive.Thumb> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb> {}

const SliderTrack = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <SliderPrimitive.Track
    ref={ref}
    className={cn(sliderTrack(), className)}
    {...props}
  />
))

SliderTrack.displayName = SliderPrimitive.Thumb.displayName

export default SliderTrack
