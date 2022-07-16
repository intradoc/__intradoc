#!/usr/bin/env node

import { replace } from '@intradoc/core'
import { run } from '@intradoc/cli'

import {
  name,
  version,
  license,
  author,
  homepage,
} from '../package.json'

;(async () =>
  run({
    argv:     process.argv,
    replacer: replace,
    app: {
      name,
      version,
      license,
      author,
      homepage,
    }
  })
)()
