import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import ProgressIndicator from './progress-indicator'
import { cn, progress } from '@/tailwind'
import type { VariantProps } from '@/tailwind'

export interface Comp extends React.ElementRef<typeof ProgressPrimitive.Root> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
  VariantProps<typeof progress> {
  labelText?: boolean
  value: number
  background?: 'error' | 'primary' | 'success' | 'warn' | null | undefined
}

const Progress = React.forwardRef<Comp, Props>(({ className, labelText = false, size, background, value, ...props }, ref) => (
  <div className="flex flex-col gap-1">
    {labelText && (
      <label className="flex justify-between w-full">
        <span>Completado</span>
        <span>
          {value}
          %
        </span>
      </label>
    )}
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(progress({ size }), className)}
      {...props}
    >
      <ProgressIndicator value={value} background={background} />
    </ProgressPrimitive.Root>
  </div>
))

Progress.displayName = ProgressPrimitive.Root.displayName

export default Progress
