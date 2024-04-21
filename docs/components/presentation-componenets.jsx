import { Card, CardHeader, CardContent } from '@openui-org/react/components'
import {
  KeyIcon,
  FileInputIcon,
  CreditCardIcon,
  NavigationIcon,
  MenuIcon,
  MinimizeIcon,
} from 'lucide-react'
import useLocalesMap from './use-locales'
import {
  descriptionMapComponents,
  keyMapComponents,
  titleMapComponents,
} from 'i18n/translate'

const cards = [
  {
    Icon: KeyIcon,
    title: 'Buttons',
    description: 'Customizable buttons with various styles and sizes.',
  },
  {
    Icon: FileInputIcon,
    title: 'Inputs',
    description: 'Accessible and stylish form inputs.',
  },
  {
    Icon: CreditCardIcon,
    title: 'Cards',
    description: 'Versatile card components for displaying content.',
  },
  {
    Icon: MenuIcon,
    title: 'Dropdowns',
    description: 'Accessible and customizable dropdown menus.',
  },
  {
    Icon: NavigationIcon,
    title: 'Navigation',
    description: ' Intuitive navigation components for your app.',
  },
  {
    Icon: MinimizeIcon,
    title: 'Modals',
    description: 'Lightweight and responsive modal components.',
  },
]

export default function PresentationComponenets() {
  const keyComponents = useLocalesMap(keyMapComponents)
  const titleComponents = useLocalesMap(titleMapComponents)
  const descriptionComponents = useLocalesMap(descriptionMapComponents)
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              {keyComponents}
            </div>
            <h2 className="text-3xl font-bold pt-4 pb-2 tracking-tighter sm:text-4xl md:text-5xl">
              {titleComponents}
            </h2>
            <p className="max-w-[900px] text-gray-500 text-base">
              {descriptionComponents}
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {cards.map((card, i) => (
              <Card
                key={i}
                className="dark:bg-zinc-800 border-0 shadow-md cursor-pointer hover:scale-105 transition-transform"
              >
                <CardHeader>
                  <card.Icon className="size-8" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
