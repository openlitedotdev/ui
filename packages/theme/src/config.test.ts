import type { Resolved } from './config'
import { config } from './config'

describe('test Config resolved', () => {
  it('should return config empty', () => {
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    const resolvedTest: Resolved = {}

    const resolved = config(resolvedTest, 'dark', 'openui')

    expect(Object.keys(resolved?.utilities).length).not.toBeGreaterThan(0)
  })

  it('should return config with length', () => {
    const resolvedTest: Resolved = {
      colors: {

      },
      utilities: {},
      variants: [],
    }

    const resolved = config(resolvedTest, 'dark', 'openui')

    console.warn(resolved)
    expect(Object.keys(resolved.utilities).length).toBeGreaterThan(0)
  })
})
