import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@openui-org/react'
import Playground from '@/components/playground'

export default function Home() {
  return (
    <Playground>
      <h1 className="text-xl font-extrabold uppercase">Zone game</h1>
      <div>
        -------------------------------------
        <br />
        <small className="font-bold block text-center">
          Down here is the playground
        </small>
      </div>
      {/*
        * The playground component is a wrapper that applies some styles to its children. This is a good example of how to create a reusable component in Next.js.

        Rules
        - Test UI components in isolation
        - Add the component to the page.tsx file
        - Remove the component from the page.tsx files
    */}
    </Playground>
  )
}
