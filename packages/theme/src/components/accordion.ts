import { cva } from 'class-variance-authority'

export const accordion = cva('')

export const accordionContent = cva('overflow-hidden text-small transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down')

export const accordionItem = cva('border-b px-4')

export const accordionTrigger = cva('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180')
