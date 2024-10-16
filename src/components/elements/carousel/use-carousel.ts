import type useEmblaCarousel from 'embla-carousel-react'
import type { CarouselProps } from './carousel'
import React from 'react'

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context)
    throw new Error('useCarousel must be used within a <Carousel />')

  return context
}

export {
  CarouselContext,
  useCarousel,
}
