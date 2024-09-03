import React from 'react'
import { Button } from '../button'
import { useCarousel } from './use-carousel'
import { carouselPrevious, cn } from '@/tailwind'

export interface Comp extends HTMLButtonElement {}
export interface Props extends React.ComponentProps<typeof Button> {}

const CarouselPrevious = React.forwardRef<Comp, Props>(({
  className,
  variant = 'ghost',
  size = 'icon',
  ...props
}, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        carouselPrevious(),
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      {props.children}
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})

CarouselPrevious.displayName = 'CarouselPrevious'

export default CarouselPrevious
