import { config } from '../src/config'
import type { Resolved } from '../src/interfaces/utils'

describe('test Config resolved', () => {
  it('should return config empty', () => {
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    const resolvedTest: Resolved = {}

    const resolved = config(resolvedTest, 'dark', 'openui')

    expect(Object.keys({ ...resolved?.utilities }).length).not.toBeGreaterThan(0)
  })
})
