import Link from 'next/link'
import type { Doc } from 'contentlayer/generated'
import { button, cn } from '@openui-org/theme'
import { docsConfig } from '@/constants/docs'

interface DocsPagerProps {
  doc: Doc
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc)

  if (!pager)
    return null

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Link
          href={pager.prev.href}
          className={cn(button({ variant: 'ghost' }))}
        >
          {pager.prev.title}
        </Link>
      )}
      {pager?.next && (
        <Link
          href={pager.next.href}
          className={cn(button({ variant: 'ghost' }), 'ml-auto')}
        >
          {pager.next.title}
        </Link>
      )}
    </div>
  )
}

export function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null]
  const activeIndex = flattenedLinks.findIndex(
    link => doc.slug === link?.href,
  )
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next
    = activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null
  return {
    prev,
    next,
  }
}

// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
export function flatten(links: { items? }[]) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link)
  }, [])
}
