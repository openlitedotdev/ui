import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn, slider } from '@openui-org/theme'
import SliderThumb from './slider-thumb'
import SliderRange from './slider-range'
import SliderTrack from './slider-track'

export interface Comp extends React.ElementRef<typeof SliderPrimitive.Root> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {}

const Slider = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(slider(), className)}
    {...props}
  >
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName

export default Slider
