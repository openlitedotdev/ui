import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn, sliderThumb } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof SliderPrimitive.Track> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track> {}

const SliderThumb = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <SliderPrimitive.Track
    ref={ref}
    className={cn(sliderThumb(), className)}
    {...props}
  />
))

SliderThumb.displayName = SliderPrimitive.Track.displayName

export default SliderThumb
