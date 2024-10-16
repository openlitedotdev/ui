import type { VariantProps } from '@/tailwind'
import { cn, slider } from '@/tailwind'
import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'
import SliderRange from './slider-range'
import SliderTrack from './slider-track'

export interface Comp extends React.ElementRef<typeof SliderPrimitive.Root> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
  VariantProps<typeof slider> {
  variant?: 'default' | 'error' | 'primary' | 'success' | 'warn' | null | undefined
  styles?: string
  values?: boolean
}

const Slider = React.forwardRef<Comp, Props>(({ className, styles, values = false, variant = 'primary', ...props }, ref) => {
  const [value, setValue] = React.useState<number[]>(props.defaultValue || [0])

  return (
    <div className="w-full">
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          slider(),
          className,
        )}
        {...props}
        value={value}
        onValueChange={newValue => setValue(newValue)}
      >
        <SliderTrack>
          <SliderRange variant={variant} className={styles} />
        </SliderTrack>
        <SliderPrimitive.Thumb className="block size-6 flex justify-center rounded-full bg-white border shadow-medium transition-colors focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          {
            values
              ? (
                  <p className="-mt-5">
                    {value[0]}
                  </p>
                )
              : ''
          }
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
      {
        values
          ? (
              <div className="flex w-full justify-between mt-2">
                <p className="text-black">{props.min ? props.min : 0}</p>
                <p className="text-black">{props.max ? props.max : 100}</p>
              </div>
            )
          : ''
      }
    </div>
  )
})

Slider.displayName = SliderPrimitive.Root.displayName

export default Slider
