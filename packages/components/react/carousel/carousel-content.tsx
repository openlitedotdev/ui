import React from 'react'
import { carouselContent, cn } from '@openui-org/theme'
import { useCarousel } from './use-carousel'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselContent = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(carouselContent(), orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        {...props}
      />
    </div>
  )
})

CarouselContent.displayName = 'CarouselContent'

export default CarouselContent
