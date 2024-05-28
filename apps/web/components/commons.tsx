import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@openui-org/react'
import {
  CreditCardIcon,
  FileInputIcon,
  KeyIcon,
  MenuIcon,
  MinimizeIcon,
  NavigationIcon,
} from 'lucide-react'
import Link from 'next/link'
import Title from './title'

const cards = [
  {
    Icon: KeyIcon,
    title: 'Buttons',
    description: 'Customizable buttons with various styles and sizes.',
    path: '/docs/components/button',
  },
  {
    Icon: FileInputIcon,
    title: 'Inputs',
    description: 'Accessible and stylish form inputs.',
    path: '/docs/components/input',
  },
  {
    Icon: CreditCardIcon,
    title: 'Cards',
    description: 'Versatile card components for displaying content.',
    path: '/docs/components/card',
  },
  {
    Icon: MenuIcon,
    title: 'Dropdowns',
    description: 'Accessible and customizable dropdown menus.',
    path: '/docs/components/dropdown',
  },
  {
    Icon: NavigationIcon,
    title: 'Navigation',
    description: ' Intuitive navigation components for your app.',
    path: '/docs/components/sheet',
  },
  {
    Icon: MinimizeIcon,
    title: 'Modals',
    description: 'Lightweight and responsive modal components.',
    path: '/docs/components/dialog',
  },
]

export default function Commons() {
  return (
    <section className="w-full py-12 md:py-24 flex flex-col items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <Badge color="none" outline="success">
              Key components 👋
            </Badge>
            <Title>
              Beautifully Designed Components
            </Title>
            <p className="max-w-[900px] text-gray-500 text-base">
              Explore our collection of carefully crafted components that you can use to build your next web application.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {cards.map((card, i) => (
              <Link key={i} href={card.path}>
                <Card className="cursor-pointer hover:scale-105 transition-all h-full bg-default shadow" shadow="none" border="sm" ripple>
                  <CardHeader>
                    <card.Icon className="size-8" />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
