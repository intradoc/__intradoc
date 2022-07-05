import { normalize, join } from 'node:path'
import { readFile } from 'fs-extra'

type TResult = {
  before: string
  after:  string
}

export const createFixture = (dir: string) => {
  return (): Promise<TResult> => {
    return new Promise(
      async (resolve, reject) => {
        try {
          const fixtureRoot = normalize(dir)

          const before = await readFile(
            join(fixtureRoot, '/before.md'),
            'utf-8'
          )

          const after = await readFile(
            join(fixtureRoot, '/after.md'),
            'utf-8'
          )

          resolve({
            before,
            after,
          })
        } catch (e) {
          reject()
        }
      }
    )
  }
}
