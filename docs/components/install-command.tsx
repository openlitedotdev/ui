'use client'

import { useState } from 'react'
import { Check, Copy, Terminal } from 'lucide-react'
import { Button } from '@openlite/ui'

export default function InstallCommand() {
  const [copied, setCopied] = useState(false)
  const installCommand = 'npm install @openlite/ui'

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center space-x-2 border-neutral-300 border rounded-medium p-1 max-w-md">
      <code className="flex items-center gap-2 flex-grow px-3 py-2 text-sm text-neutral-500">
        <Terminal className="size-4" />
        {installCommand}
      </code>
      <Button
        onClick={copyToClipboard}
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-gray-200"
      >
        {copied
          ? (
              <Check className="size-4 text-green-500" />
            )
          : (
              <Copy className="size-4" />
            )}
      </Button>
    </div>
  )
}
