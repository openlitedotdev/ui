'use client'

import useThemeStore from '@/stores/color-picker'
import { Alert, AlertDescription, AlertTitle } from '@openlite/ui'
import { Chat } from '../icons/chat'

export function AlertDemo() {
  const { currentTheme } = useThemeStore()

  return (

    <Alert variant={currentTheme}>
      <Chat />
      <AlertTitle>You have a notification</AlertTitle>
      <AlertDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, asperiores. </AlertDescription>
    </Alert>
  )
}
