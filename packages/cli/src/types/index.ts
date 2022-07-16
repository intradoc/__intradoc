export type AppOptions = {
  name:     string
  version:  string
  homepage: string
  license:  string
  author:   string
}

export type Replacer = (content: string, data: any) => {
  content:     string
  numReplaced: number
}

export type CLIOptions = {
  argv:     any[]
  app:      AppOptions
  replacer: Replacer
  cwd?:     string
}
