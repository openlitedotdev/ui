import React from 'react'
import { carouselNext, cn } from '@openlabs/theme'
import { Button } from '../button'
import { useCarousel } from './use-carousel'

export interface Comp extends HTMLButtonElement {}
export interface Props extends React.ComponentProps<typeof Button> {}

const CarouselNext = React.forwardRef<Comp, Props>(({ className, color = 'ghost', size = 'icon', ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      color={color}
      size={size}
      className={cn(
        carouselNext(),
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      {props.children}
      <span className="sr-only">Next slide</span>
    </Button>
  )
})

CarouselNext.displayName = 'CarouselNext'

export default CarouselNext
