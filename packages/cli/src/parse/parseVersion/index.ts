import flags from './flags'

export { flags }

export const parseVersion = (args: any[]) => {
  let hasVersion = false

  for (const arg of args) {
    if (flags.includes(arg)) {
      hasVersion = true
      break
    }
  }

  return {
    hasVersion
  }
}
