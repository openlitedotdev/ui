import Link from 'next/link'
import type { Doc } from 'contentlayer/generated'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@openlabs/ui'
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
        <Button asChild color="ghost">
          <Link
            href={pager.prev.href}
          >
            <ArrowLeft size={20} />
            {pager.prev.title}
          </Link>
        </Button>
      )}
      {pager?.next && (
        <Button asChild color="ghost">
          <Link
            href={pager.next.href}
          >
            {pager.next.title}
            <ArrowRight size={20} />
          </Link>
        </Button>
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
