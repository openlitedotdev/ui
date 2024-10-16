import { carouselItem, cn } from '@/tailwind'
import React from 'react'
import { useCarousel } from './use-carousel'

export interface Comp extends HTMLDivElement {}
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselItem = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(carouselItem(), orientation === 'horizontal' ? 'pl-4' : 'pt-4', className,
      )}
      {...props}
    />
  )
})

CarouselItem.displayName = 'CarouselItem'

export default CarouselItem
