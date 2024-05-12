import '../../../mdx.css'

import { notFound } from 'next/navigation'
import { allDocs } from 'contentlayer/generated'
import { getTableOfContents } from '@/lib/toc'
import { Mdx } from '@/components/mdx-components'
import { DocsPageHeader } from '@/components/page-header'
import { DocsPager } from '@/components/pager'
import { DashboardTableOfContents } from '@/components/toc'

interface DocPageProps {
  params: {
    slug: string[]
  }
}

export const runtime = 'edge'

// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
async function getDocFromParams(params) {
  const slug = params.slug?.join('/') || ''
  const doc = allDocs.find((doc: { slugAsParams: any }) => doc.slugAsParams === slug)

  if (!doc)
    return null

  return doc
}

export async function generateStaticParams(): Promise<DocPageProps['params'][]> {
  return allDocs.map((doc: { slugAsParams: string }) => ({
    slug: doc.slugAsParams.split('/'),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params)

  if (!doc)
    notFound()

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsPageHeader heading={doc.title} text={doc.description} />
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6" />
        <DocsPager doc={doc} />
      </div>
      <div className="hidden text-small xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10 pl-20">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  )
}
