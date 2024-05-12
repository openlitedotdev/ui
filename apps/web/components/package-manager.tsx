import { Tabs, TabsContent, TabsList, TabsTrigger } from '@openui-org/react'

// create array packages managers

const packagesManagers = [
  {
    name: 'npm',
    command: 'npm install -g npm',
  },
  {
    name: 'yarn',
    command: 'npm install -g yarn',
  },
  {
    name: 'pnpm',
    command: 'npm install -g pnpm',
  },
]

export function PackageManagers() {
  return (
    <>
      {packagesManagers.map(manager => (
        <Tabs
          className="rounded-large bg-white shadow-small"
          defaultValue={manager.name}
        >

          <TabsList className="border-b">
            <TabsTrigger value={manager.name}>{manager.name}</TabsTrigger>
          </TabsList>
          <TabsContent value={manager.name}>
            <div className="p-4">
              <pre>
                <code>{manager.command}</code>
              </pre>
            </div>
          </TabsContent>

        </Tabs>
      ))}
    </>
  )
}
