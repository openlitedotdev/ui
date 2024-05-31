import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@openlabs/ui'
import { FAQs } from '@/constants/faqs'
import Title from '@/components/title'

export default function PageFAQ() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-default">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <Title>
              Frequently Asked Questions
            </Title>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get answers to your questions about our design system. Explore our guidelines, component usage, and more.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-20 container mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {FAQs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} ripple shadow="sm" className="mt-6">
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
