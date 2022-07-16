import type { AppOptions } from '../../src/types'
import { createApp } from '../../src/App'

import dataFlags    from '../../src/parse/parseData/flags'
import fileFlags    from '../../src/parse/parseFiles/flags'
import helpFlags    from '../../src/parse/parseHelp/flags'
import versionFlags from '../../src/parse/parseVersion/flags'

export const getTestAppOptions = (): AppOptions => {
  return {
    name:     'test-app',
    version:  '0.0.0-development',
    homepage: 'https://www.test.com',
    license:  'ISC',
    author:   'Author <author@email.com> (https://www.author.com)'
  }
}

export const getTestApp = () => {
  const app = createApp(getTestAppOptions())

  app
    .addFlags(dataFlags)
    .addFlags(fileFlags)
    .addFlags(helpFlags)
    .addFlags(versionFlags)

  return app
}
