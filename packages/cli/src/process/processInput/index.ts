import { sep } from 'node:path'

import type { App }      from '../../App'
import type { Replacer } from '../../types'

import { loadData }  from '../../load/loadData'
import { loadFiles } from '../../load/loadFiles'

import { saveFile } from '../../utils'

type Options = {
  files:    string[]
  data:     string[]
  app:      App
  replacer: Replacer,
  cwd:      string,
}

export const processInput = async (options: Options) => {
  const $   = console.log
  const cwd = options.cwd

  const {
    data,
    numKeys,
    numDataSources,
  } = await loadData({
    data: options.data,
    cwd,
  })

  const {
    files,
    numFiles,
  } = await loadFiles({
    files: options.files,
    cwd,
  })

  $()
  $(`loaded data with ${numKeys} key(s) from ${numDataSources} source(s)`)
  $()
  $(`process ${numFiles} file(s):`)

  for (const file of files) {
    const {
      content,
      numReplaced,
    } = options.replacer(file.content, data)

    await saveFile(
      file.filepath,
      content
    )

    $(`  - ${file.dirpath}${sep}`)
    $(`    ${file.filename} - ${numReplaced} occurrence(s) replaced`)
  }
}
