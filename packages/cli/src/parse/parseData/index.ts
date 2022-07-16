import { App } from '../../App'

import flags from './flags'

export { flags }

export const parseData = (args: any[], app: App) => {
  const data: string[] = []

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

      data.push(arg)
    }
  }

  return {
    hasData: data.length > 0,
    data,
  }
}
