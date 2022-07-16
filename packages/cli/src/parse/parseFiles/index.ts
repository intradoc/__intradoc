import { App } from '../../App'

import flags from './flags'

export { flags }

export const parseFiles = (args: any[], app: App) => {
  const files: string[] = []

  let ongoing = false

  for (const arg of args) {
    if (!ongoing) {
      if (flags.includes(arg)) {
        ongoing = true
        continue
      }
    }

    if (ongoing) {
      if (app.isFlag(arg)) {
        break
      }

      files.push(arg)
    }
  }

  return {
    hasFiles: files.length > 0,
    files,
  }
}
