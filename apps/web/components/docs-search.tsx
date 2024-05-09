'use client'

import { Input } from '@openui-org/react'
import { cn } from '@openui-org/theme'
import * as React from 'react'

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
        placeholder="Search documentation..."
        className="h-8 w-full sm:w-64 sm:pr-12 border border-black/80"
      />
    </form>
  )
}
