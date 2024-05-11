import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@openui-org/react'
import { FAQs } from '@/constants/faqs'

export default function Page() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get answers to your questions about our design system. Explore our guidelines, component usage, and more.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-20 container mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {FAQs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} ripple shadow="md" className="mt-6">
              <AccordionTrigger text="lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  )
}
