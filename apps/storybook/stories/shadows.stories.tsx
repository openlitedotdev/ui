import * as React from 'react'
import type { Meta } from '@storybook/react'

interface ShadowsItem {
  name: string
  className?: string

}

interface SwatchShadows {
  title: string
  shadows: ShadowsItem[]
}

interface SwatchSetProps {
  items: SwatchShadows[]
}

interface ShadowsSwatchProps {
  name: string
  className?: string
}

function ShadowsSwatch({ name, className }: ShadowsSwatchProps) {
  return (
    <div
      className={`bg-secondary flex flex-col  items-center justify-center size-40 m-2 rounded-xl ${className}`}
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
  title: 'Themes/Shadows',
  component: SwatchSet,
} as Meta<typeof SwatchSet>

export const Shadows = {
  args: {
    items: [
      {
        title: 'Shadows Base',
        shadows: [
          {
            name: 'shadow',
            className: 'shadow',
          },
        ],
      },
      {
        title: 'Shadows Small',
        shadows: [
          {
            name: 'shadow-small',
            className: 'shadow-small',
          },
        ],
      },
      {
        title: 'Shadows Medium',
        shadows: [
          {
            name: 'shadow-medium',
            className: 'shadow-medium',
          },
        ],
      },
      {
        title: 'Shadows Large',
        shadows: [
          {
            name: 'shadow-large',
            className: 'shadow-large',
          },
        ],
      },
    ],
  },
}
