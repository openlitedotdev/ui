import type { UseEmblaCarouselType } from 'embla-carousel-react'
import Carousel from './carousel'
import CarouselContent from './carousel-content'
import CarouselItem from './carousel-item'
import CarouselPrevious from './carousel-previous'
import CarouselNext from './carousel-next'
import { CarouselContext, useCarousel } from './use-carousel'

type CarouselApi = UseEmblaCarouselType[1]

export type { CarouselApi }
export type { Comp as CarouselComponent, Props as CarouselProps } from './carousel'
export type { Comp as CarouselContentComponent, Props as CarouselContentProps } from './carousel-content'
export type { Comp as CarouselItemComponent, Props as CarouselItemProps } from './carousel-item'
export type { Comp as CarouselPreviousComponent, Props as CarouselPreviousProps } from './carousel-next'
export type { Comp as CarouselNextComponent, Props as CarouselNextProps } from './carousel-next'
export {
  useCarousel,
  Carousel,
  CarouselContent,
  CarouselContext,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
