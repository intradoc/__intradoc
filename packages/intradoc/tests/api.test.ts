import { readFile } from 'fs-extra'

import { replace } from '../src'

describe('intradoc API', () => {
  test('present', () => {
    expect(typeof replace).toBe('function')
  })

  test('run', async () => {
    const before = await readFile(`${__dirname}/fixtures/api/before.md`, 'utf8')
    const after  = await readFile(`${__dirname}/fixtures/api/after.md`,  'utf8')

    const result = replace(
      before,
      {
        content: 'new, shiny content'
      }
    )

    expect(result.content).toBe(after)
    expect(result.numReplaced).toBe(1)
  })
})
