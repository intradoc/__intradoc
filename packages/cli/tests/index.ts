/*
quick test for CLI execution:

run from /packages/cli/

help:
$ npx ts-node ./tests

version:
$ npx ts-node ./tests --version

test run:
$ npx ts-node ./tests fixtures/run/test.md fixtures/run/test.json
*/

import { run } from '../src'

;(async () => {
  await run({
    argv: process.argv,
    app:  {
      name:     'intradoc',
      version:  '1.3.5',
      homepage: 'https://intradoc.github.io',
      license:  'ISC',
      author:   'Richard King <richrdkng@gmail.com> (https://www.richrdkng.com)'
    },
    replacer: (content, data) => ({
      content:     content,
      numReplaced: 1,
    })
  })
})()
