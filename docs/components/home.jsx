import { Button } from "@openui-org/react/components";
import Link from "next/link";
import useLocalesMap from './use-locales'
import {titleMap, descriptionMap, buttonPresentationMap} from '../i18n/translate'

export default function Home() {
  const title =  useLocalesMap(titleMap)
  const description = useLocalesMap(descriptionMap)
  const buttonPresentation = useLocalesMap(buttonPresentationMap)

  return (
    <section className="py-20 sm:py-24 relative">
      <div className="mx-auto px-4 sm:px-6 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div className="text-center relative z-[1]">
          <h1 className="text-6xl font-bold tracking-tight text-balance">
           {title}
          </h1>
          <p className="mt-6 opacity-90 text-sm tracking-tight text-pretty">
           {description}
          </p>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
            <Button asChild>
              <Link href="/docs/introduction">
                {buttonPresentation}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
