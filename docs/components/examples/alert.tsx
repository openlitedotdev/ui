import { Alert, AlertDescription, AlertTitle } from '@openlite/ui'
import { Chat } from '../icons/chat'

export function AlertDemo() {
  return (

    <Alert>
      <Chat />
      <AlertTitle>You have a notification</AlertTitle>
      <AlertDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, asperiores. </AlertDescription>
    </Alert>
  )
}
