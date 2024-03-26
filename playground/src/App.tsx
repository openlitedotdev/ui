import { Alert, AlertDescription, AlertTitle, Button } from '@design-system/react'
import { CircleAlert, MailCheck, TriangleAlert } from 'lucide-react'

function App() {
  return (
    <>
      <main className="container mx-auto bg-purple-400/80 text-white h-screen flex justify-center items-center gap-6 mt-10 rounded flex-col">
        <Button variant="success" size="lg">
          Examples UI
        </Button>
        <Button variant="primary" size="lg">
          Examples UI
        </Button>
        <Button variant="secondary" size="lg">
          Examples UI
        </Button>
        <Button variant="error" size="lg">
          Examples UI
        </Button>
        <Button>
          Examples UI
        </Button>
        <Button variant="warn">
          Examples UI
        </Button>
        <Alert variant="error">
          <TriangleAlert className="size-6" />
          <AlertTitle>
            Hi Teams Open Land
          </AlertTitle>
          <AlertDescription>
            This example component alert by Open Land
          </AlertDescription>
        </Alert>
        <Alert variant="success">
          <MailCheck className="size-6" />
          <AlertTitle>
            Hi Teams Open Land
          </AlertTitle>
          <AlertDescription>
            This example component alert by Open Land
          </AlertDescription>
        </Alert>
        <Alert variant="warn">
          <CircleAlert className="size-6" />
          <AlertTitle>
            Hi Teams Open Land
          </AlertTitle>
          <AlertDescription>
            This example component alert by Open Land
          </AlertDescription>
        </Alert>
      </main>
    </>
  )
}

export default App
