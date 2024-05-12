import * as React from 'react'
import type { Meta } from '@storybook/react'

interface RadiusItem {
  name: string
  className?: string

}

interface SwatchRadius {
  title: string
  shadows: RadiusItem[]
}

interface SwatchSetProps {
  items: SwatchRadius[]
}

interface RadiusSwatchProps {
  name: string
  className?: string
}

function ShadowsSwatch({ name, className }: RadiusSwatchProps) {
  return (
    <div
      className={`bg-secondary flex flex-col items-center justify-center size-40 m-2 shadow-lg ${className}`}
    >
      <span className="text-secondary-foreground text-large">{name}</span>
    </div>
  )
}

function SwatchSet({ items }: SwatchSetProps) {
  return (
    <div className="grid grid-cols-3 w-full h-full p-2">
      {items.map(({ title, shadows }) => (
        <div key={title} className="flex flex-col items-center w-full h-full">
          <h2 className="text-2xl font-bold text-center">{title}</h2>
          <div className="flex flex-row flex-wrap items-center justify-center w-full h-full p-4">
            {shadows.map((c, index) => (
              <ShadowsSwatch
                key={`${c.name}-${index}`}
                className={c.className}
                name={c.name}
              />
            ),
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default {
  title: 'Themes/Radius',
  component: SwatchSet,
} as Meta<typeof SwatchSet>

export const Radius = {
  args: {
    items: [
      {
        title: 'Radius Base',
        shadows: [
          {
            name: 'rounded',
            className: 'rounded',
          },
        ],
      },
      {
        title: 'Radius Small',
        shadows: [
          {
            name: 'rounded-small',
            className: 'rounded-small',
          },
        ],
      },
      {
        title: 'Radius Medium',
        shadows: [
          {
            name: 'rounded-medium',
            className: 'rounded-medium',
          },
        ],
      },
      {
        title: 'Radius Large',
        shadows: [
          {
            name: 'rounded-large',
            className: 'rounded-large',
          },
        ],
      },
    ],
  },
}
