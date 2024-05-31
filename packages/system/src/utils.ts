import type * as React from 'react'
import { forwardRef as baseForwardRef } from 'react'
import type {
  As,
  InternalForwardRefRenderFunction,
  PropsOf,
  RightJoinProps,
} from './types'

export function forwardRef<Component extends As, Props extends object, OmitKeys extends keyof any = never>(
  component: React.ForwardRefRenderFunction<any, RightJoinProps<PropsOf<Component>, Props> & { as?: As }>,
) {
  return baseForwardRef(component) as InternalForwardRefRenderFunction<Component, Props, OmitKeys>
}

export function toIterator(obj: any) {
  return {
    ...obj,
    [Symbol.iterator]() {
      const keys = Object.keys(this)
      let index = 0

      return {
        next: () => {
          if (index >= keys.length) {
            return { done: true }
          }
          const key = keys[index]
          const value = this[key]

          index++

          return { value: { key, value }, done: false }
        },
      }
    },
  }
}

export function isOpenUIEl(component: React.ReactComponentElement<any>) {
  return !!component.type?.render?.displayName?.includes('OpenUI')
}
