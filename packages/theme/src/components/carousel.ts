import { cva } from 'class-variance-authority'

/**
 * Carousel wrapper **Class Variants** component
 *
 * const styles = card({...})
 *
 * @example
 * <Carousel className={styles())}>
 *   // carousel elements
 * </Carousel>
 */
export const carousel = cva('relative')

/**
 * Carousel wrapper **Class Variants** component
 *
 * const styles = carouselContent({...})
 *
 * @example
 * <CarouselContent className={styles())}>
 *   // carousel elements
 * </CarouselContent>
 */
export const carouselContent = cva('flex')

/**
 * Carousel wrapper **Class Variants** component
 *
 * const styles = carouselItem({...})
 *
 * @example
 * <CarouselItem className={styles())}>
 *   // carousel elements
 * </CarouselItem>
 */
export const carouselItem = cva('min-w-0 shrink-0 grow-0 basis-full')

/**
 * Carousel wrapper **Class Variants** component
 *
 * const styles = carouselPrevious({...})
 *
 * @example
 * <CarouselPrevious className={styles())}>
 *   // carousel elements
 * </CarouselPrevious>
 */
export const carouselPrevious = cva('absolute size-8 rounded-full')

/**
 * Carousel wrapper **Class Variants** component
 *
 * const styles = carouselNext({...})
 *
 * @example
 * <CarouselNext className={styles())}>
 *   // carousel elements
 * </CarouselNext>
 */
export const carouselNext = cva('absolute size-8 rounded-full')
