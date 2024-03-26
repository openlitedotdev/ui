import { Button } from '@design-system/react'

function App() {
  return (
    <>
      <main className="container mx-auto bg-success-400 text-white h-screen flex justify-center items-center gap-6 mt-10 rounded">
        <Button variant="primary" size="lg">
          Examples UI
        </Button>
        <Button variant="danger" size="lg">
          Examples UI
        </Button>
      </main>
    </>
  )
}

export default App
