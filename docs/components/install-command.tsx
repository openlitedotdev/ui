'use client'

import { Button } from '@openlite/ui'
import { useState } from 'react'
import { Check } from './icons/check'
import { Copy } from './icons/copy'
import { Terminal } from './icons/terminal'

export default function InstallCommand() {
  const [copied, setCopied] = useState(false)
  const installCommand = 'npm install @openlite/ui'

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center space-x-2 border border-default-300 rounded-medium p-1 max-w-md">
      <pre className="flex items-center gap-2 flex-grow px-3 py-2">
        <Terminal className="text-neutral-500" />
        <code className="text-xs sm:text-sm text-neutral-500">
          {installCommand}
        </code>
      </pre>
      <Button
        onClick={copyToClipboard}
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-gray-200"
      >
        {copied
          ? (
              <Check className="text-green-500" />
            )
          : (
              <Copy />
            )}
      </Button>
    </div>
  )
}
