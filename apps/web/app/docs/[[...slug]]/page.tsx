import { notFound } from 'next/navigation'
import { allDocs } from 'contentlayer/generated'

import type { Metadata } from 'next'
import Link from 'next/link'
import { getTableOfContents } from '@/lib/toc'
import { Mdx } from '@/components/mdx-components'
import { DocsPageHeader } from '@/components/page-header'
import { DocsPager } from '@/components/pager'
import { DashboardTableOfContents } from '@/components/toc'

import '../../mdx.css'
import { getHeadings } from '@/lib/config-page'

interface DocPageProps {
  params: {
    slug: string[]
  }
}
async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join('/') || ''
  const doc = allDocs.find(doc => doc.slugAsParams === slug)

  if (!doc)
    // eslint-disable-next-line no-unused-expressions
    null

  const headings = getHeadings(doc?.body.raw)

  const currentRoute = {
    key: doc?._id,
    title: doc?.title,
    path: `/${doc?._raw?.sourceFilePath}`,
  }

  return { doc, headings, currentRoute }
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { doc } = await getDocFromParams({ params })

  if (!doc)
    return {}

  return {
    metadataBase: new URL('https://openui-org.vercel.app'),
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      url: doc.url,
      images: [
        {
          url: 'https://openui-org.vercel.app/next.svg',
          width: 1200,
          height: 630,
          alt: 'open ui design system',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.title,
      description: doc.description,
    },
  }
}

export async function generateStaticParams(): Promise<DocPageProps['params'][]> {
  return allDocs.map(doc => ({
    slug: doc.slugAsParams.split('/'),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const { doc } = await getDocFromParams({ params })

  if (!doc)
    notFound()

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsPageHeader heading={doc.title} text={doc.description} />
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6 border-default" />
        <DocsPager doc={doc} />
        <footer className="mt-10 pl-4 flex justify-end">
          <Link href="https://github.com/OpenLab-dev/openui" target="_blank">
            Edit this page on GitHub
          </Link>
        </footer>
      </div>
      <div className="hidden text-small xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10 pl-20">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  )
}
