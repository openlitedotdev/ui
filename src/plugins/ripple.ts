import type { Color, Event, Rect } from '@/types/ripple'

export class Ripple {
  private x: number
  private y: number
  private z: number

  constructor() {
    this.x = 0
    this.y = 0
    this.z = 0
  }

  findFurthestPoint(clickPointX: number, elementWidth: number, offsetX: number, clickPointY: number, elementHeight: number, offsetY: number): number {
    this.x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth
    this.y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight
    this.z = Math.hypot(
      this.x - (clickPointX - offsetX),
      this.y - (clickPointY - offsetY),
    )

    return this.z
  }

  applyStyles(element: HTMLElement, color: Color, rect: Rect, radius: number, event: Event): void {
    element.classList.add('ripple')
    element.style.backgroundColor = color === 'dark' ? 'rgba(0,0,0, 0.2)' : 'rgba(255,255,255, 0.3)'
    element.style.borderRadius = '50%'
    element.style.pointerEvents = 'none'
    element.style.position = 'absolute'
    element.style.left = `${event.clientX - rect.left - radius}px`
    element.style.top = `${event.clientY - rect.top - radius}px`
    element.style.width = element.style.height = `${radius * 2}px`
  }

  applyAnimation(element: HTMLElement): void {
    element.animate(
      [
        {
          transform: 'scale(0)',
          opacity: 1,
        },
        {
          transform: 'scale(1.5)',
          opacity: 0,
        },
      ],
      {
        duration: 500,
        easing: 'linear',
      },
    )
  }

  create(event: Event, color: Color): void {
    const element = event.currentTarget

    element.style.position = 'relative'
    element.style.overflow = 'hidden'

    const rect = element.getBoundingClientRect()

    const radius = this.findFurthestPoint(
      event.clientX,
      element.offsetWidth,
      rect.left,
      event.clientY,
      element.offsetHeight,
      rect.top,
    )

    const circle = document.createElement('span')

    this.applyStyles(circle, color, rect, radius, event)
    this.applyAnimation(circle)

    element.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  }
}
