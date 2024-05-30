'use client'

import * as React from 'react'

import { cn } from '@openlabs/theme'
import { Input } from '@openui-org/react'
import { Search } from 'lucide-react'

interface DocsSearchProps extends React.HTMLAttributes<HTMLFormElement> {}

export function DocsSearch({ className, ...props }: DocsSearchProps) {
  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    return {
      title: 'Not implemented',
      description: 'We\'re still working on the search.',
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn('relative w-full', className)}
      {...props}
    >
      <Input
        type="search"
        placeholder="Search..."
        className="rounded-large py-0 relative bg-default shadow border-0"
      />
      <Search className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground" />
    </form>
  )
}
