import React from 'react'
import { button } from '@design-system/theme'

interface PropsButton {
  children: React.ReactNode
}

export function Button(props: PropsButton) {
  return <button className={button({ color: 'success' })}>{props.children}</button>
}
