import { Button } from '@openlabs/ui'
import { Plus } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen gap-y-4 p-24">
      {/** Add your example, before remove */}
      <Button outline="default" rounded="full">Hola, Mundo</Button>
      <Button size="icon" outline="primary" shadow="none" rounded="full">
        <Plus />
      </Button>
    </main>
  )
}
