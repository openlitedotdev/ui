import { Tabs, TabsContent, TabsList } from '@openui-org/react'
import type { Key } from 'react'
import { useState } from 'react'

type PackageManagerName = 'npm' | 'yarn' | 'pnpm' | 'bun'

interface PackageManager {
  name: PackageManagerName
  label?: string
}

const packageManagers: PackageManager[] = [
  {
    name: 'npm',
  },
  {
    name: 'yarn',
  },
  {
    name: 'pnpm',
  },
  {
    name: 'bun',
  },
]

export interface PackageManagersProps {
  commands: Partial<Record<PackageManagerName, React.Key>>
}

export function PackageManagers({ commands }: PackageManagersProps) {
  const [selectedManager, setSelectedManager] = useState<PackageManagerName>(
    commands.npm ? 'npm' : 'pnpm',
  )

  const handleSelectionChange = (tabKey: Key) => {
    setSelectedManager(tabKey as PackageManagerName)
  }

  return (
    <>
      <Tabs
        aria-label="NextUI installation commands"
        className="group mt-4 min-w-[300px] w-full overflow-x-auto h-10"
      >
        <TabsList>
          {packageManagers.map(({ name, label }) => (
            <button
              key={name}
              className={`${
                    selectedManager === name
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary'
              } group flex-1 px-4 py-2 text-sm font-medium rounded-md`}
              onClick={() => handleSelectionChange(name)}
            >
              {label || name}
            </button>
          ))}
        </TabsList>
        <TabsContent value="">
          {packageManagers.map(({ name }) => (
            <div
              key={name}
              className={`${
                selectedManager === name ? 'block' : 'hidden'
              } px-4 py-2`}
            >
              <pre className="text-sm text-gray-600">
                {commands[name]}
              </pre>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </>
  )
}
