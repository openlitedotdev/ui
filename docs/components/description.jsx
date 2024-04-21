import { Button } from '@openui-org/react/components'
import {
  titleMapPresentation,
  buttonPresentationMap,
  descriptionMapPresentation,
} from 'i18n/translate'
import useLocalesMap from './use-locales'
import Link from 'next/link'

export default function Description() {
  const titlePresentation = useLocalesMap(titleMapPresentation)
  const descriptionPresentation = useLocalesMap(descriptionMapPresentation)
  const buttonPresentation = useLocalesMap(buttonPresentationMap)
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-zinc-800">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            {titlePresentation}
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {descriptionPresentation}
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
          <Button asChild>
            <Link href="/docs/introduction">{buttonPresentation}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
