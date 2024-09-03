import React from 'react'
import { Button } from '../button'
import { useCarousel } from './use-carousel'
import { carouselNext, cn } from '@/tailwind'

export interface Comp extends HTMLButtonElement {}
export interface Props extends React.ComponentProps<typeof Button> {}

const CarouselNext = React.forwardRef<Comp, Props>(({
  className,
  variant = 'ghost',
  size = 'icon',
  ...props
}, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
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
