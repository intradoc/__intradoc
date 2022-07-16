import flags from './flags'

export { flags }

export const parseHelp = (args: any[]) => {
  let hasHelp = false

  for (const arg of args) {
    if (flags.includes(arg)) {
      hasHelp = true
      break
    }
  }

  return {
    hasHelp
  }
}
