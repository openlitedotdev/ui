import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import type { VariantProps } from '@openlabs/theme'
import { cn, slider } from '@openlabs/theme'
import SliderRange from './slider-range'
import SliderTrack from './slider-track'

export interface Comp extends React.ElementRef<typeof SliderPrimitive.Root> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
  VariantProps<typeof slider> {
  background?: 'error' | 'primary' | 'success' | 'warn' | null | undefined
  styles?: string
}

const Slider = React.forwardRef<Comp, Props>(({ className, styles, background = 'primary', ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      slider(),
      className,
    )}
    {...props}
  >
    <SliderTrack>
      <SliderRange background={background} className={styles} />
    </SliderTrack>
    <SliderPrimitive.Thumb className={`block h-5 w-5 rounded-full border-2 border-${background} bg-${background} shadow-${background} ring-offset-${background} transition-colors focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`} />
  </SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName

export default Slider
