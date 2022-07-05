import {
  simple1,
  simple2,
} from './fixtures/markdown'

import { replace } from '../src'

describe('core', () => {
  test('basic 1', async () => {
    const {
      before,
      after,
    } = await simple1()

    expect(
      replace(
        before,
        {
          content: 'new content'
        }
      )
    ).toBe(after)
  })

  test('basic 2', async () => {
    const {
      before,
      after,
    } = await simple2()

    expect(
      replace(
        before,
        {
          Content: 'new content'
        }
      )
    ).toBe(after)
  })
})
