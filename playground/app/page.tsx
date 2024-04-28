import { Alert, AlertDescription, AlertTitle } from '@openui-org/react'

export default function Home() {
  return (
    <>
      <div className="p-44">
        <button className="py-2 px-6 rounded-small shadow-large">
          Example
        </button>

        <Alert variant="error">
          <AlertTitle>
            Hola
          </AlertTitle>
          <AlertDescription>
            Te amo donde sea que estes
          </AlertDescription>
        </Alert>
      </div>
    </>
  )
}
