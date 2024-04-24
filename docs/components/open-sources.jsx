import { Button, Input } from '@openui-org/react/components'
import Link from 'next/link'
import {
  buttonMapOpenSources,
  descriptionMapOpenSources,
  paragraphMapOpenSources,
  placeHolderMapOpenSources,
  titleMapOpenSources,
} from 'i18n/translate'
import useLocalesMap from './use-locales'

export default function OpenSources() {
  const titleOpenSource = useLocalesMap(titleMapOpenSources)
  const descriptionOpenSource = useLocalesMap(descriptionMapOpenSources)
  const placeHolderOpenSources = useLocalesMap(placeHolderMapOpenSources)
  const buttonOpenSources = useLocalesMap(buttonMapOpenSources)
  const paragraphOpenSources = useLocalesMap(paragraphMapOpenSources)
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            {titleOpenSource}
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 text-base">
            {descriptionOpenSource}
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex space-x-2">
            <Input
              className="max-w-lg flex-1"
              placeholder={placeHolderOpenSources}
              type="text"
            />
            <Button type="submit">{buttonOpenSources}</Button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {paragraphOpenSources}
            <Link
              className="underline underline-offset-2"
              href="/docs/introduction#faq"
            >
              FAQ
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
