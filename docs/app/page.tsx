'use client'

import { useState } from 'react'
import { Button, Input, Tabs, TabsContent, TabsList, TabsTrigger } from '@openlite/ui'
import { Code, Palette, Shapes, Zap } from 'lucide-react'
import Link from 'next/link'

function ButtonsShowcase() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="warn">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="error">Ghost</Button>
    </div>
  )
}

function InputsShowcase() {
  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your email" />
      <Input type="password" placeholder="Enter your password" />
    </div>
  )
}

function CardsShowcase() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Card Title</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">This is a sample card component from our design system.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Another Card</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Cards can be used for various types of content.</p>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('buttons')

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Shapes className="h-6 w-6" />
          <span className="sr-only">Acme Design System</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/docs">
            Documentation
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Blog
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Build beautiful interfaces with ease
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our design system provides a comprehensive set of guidelines, components, and tools to help you
                  create cohesive and stunning user interfaces.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="ghost">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4">
              <div className="space-y-2">
                <Palette className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Consistent Design</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ensure brand consistency across all your digital products with our carefully crafted design tokens.
                </p>
              </div>
              <div className="space-y-2">
                <Code className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Developer Friendly</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our components are built with developers in mind, offering clean and efficient code that's easy to
                  implement.
                </p>
              </div>
              <div className="space-y-2">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Rapid Prototyping</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Speed up your design process with our extensive library of pre-built components and patterns.
                </p>
              </div>
              <div className="space-y-2">
                <Shapes className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Flexible & Customizable</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Easily adapt our design system to fit your unique brand identity and project requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Component Showcase</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore some of our beautifully crafted components that you can use in your projects.
                </p>
              </div>
              <div className="w-full max-w-3xl">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="buttons">Buttons</TabsTrigger>
                    <TabsTrigger value="inputs">Inputs</TabsTrigger>
                    <TabsTrigger value="cards">Cards</TabsTrigger>
                  </TabsList>
                  <TabsContent value="buttons" className="p-4 border rounded-lg mt-4">
                    <ButtonsShowcase />
                  </TabsContent>
                  <TabsContent value="inputs" className="p-4 border rounded-lg mt-4">
                    <InputsShowcase />
                  </TabsContent>
                  <TabsContent value="cards" className="p-4 border rounded-lg mt-4">
                    <CardsShowcase />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to get started?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of developers and designers who are already using our design system to create
                  beautiful and consistent user interfaces.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Acme Design System. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
