import * as React from 'react'
import type { Meta } from '@storybook/react'

interface ColorsItem {
  color: string
  className?: string
  textClassName?: string
}
interface SwatchColors {
  title: string
  items: ColorsItem[]
}
interface SwatchSetProps {
  colors: SwatchColors[]
}

interface SemanticSwatchProps {
  color: string
  className?: string
  textClassName?: string
}

function SemanticSwatch({ color, className, textClassName }: SemanticSwatchProps) {
  return (
    <div
      className={`${className} flex flex-col items-center justify-center size-40 m-2 rounded-xl shadow-lg`}
    >
      <span className={`${textClassName} text-large`}>{color}</span>
    </div>
  )
}

function SwatchSet({ colors }: SwatchSetProps) {
  return (
    <div className="grid grid-cols-3 w-full h-full p-2">
      {colors.map(({ title, items }) => (
        <div key={title} className="flex flex-col items-center w-full h-full">
          <h2 className="text-2xl font-bold text-center">{title}</h2>
          <div className="flex flex-row flex-wrap items-center justify-center w-full h-full p-4">
            {items.map((c, index) => (
              <SemanticSwatch
                key={`${c.color}-${index}`}
                className={c.className}
                color={c.color}
                textClassName={c.textClassName}
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
  title: 'Themes/Colors',
  component: SwatchSet,
} as Meta<typeof SwatchSet>

export const SemanticColors = {
  args: {
    colors: [
      {
        title: 'Primary',
        items: [
          {
            color: 'primary',
            className: 'bg-primary',
            textClassName: 'text-primary-foreground',
          },
        ],
      },
      {
        title: 'Secondary',
        items: [
          {
            color: 'secondary',
            className: 'bg-secondary',
            textClassName: 'text-secondary-foreground',
          },
        ],
      },
      {
        title: 'Danger',
        items: [
          {
            color: 'danger',
            className: 'bg-error',
            textClassName: 'text-error-foreground',
          },
        ],
      },
      {
        title: 'Success',
        items: [
          {
            color: 'success',
            className: 'bg-success',
            textClassName: 'text-success-foreground',
          },
        ],
      },
      {
        title: 'Warn',
        items: [
          {
            color: 'warn',
            className: 'bg-warn',
            textClassName: 'text-warn-foreground',
          },
        ],
      },

    ],
  },
}
