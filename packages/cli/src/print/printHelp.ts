import { App } from '../App'

export const printHelp = (app: App) => {
  const name = app.getName()
  const $    = console.log

  $(`${app.getName()} v${app.getVersion()} (${app.getHomepage()})`)
  $(`${app.getLicense()} @ ${app.getAuthor()}`)
  $()

  $('Usage:')
  $(`  $ ${name} <flags> <input>`)
  $(`  $ ${name} <input> <flags>`)

  $()
  $(`  $ ${name} <flags> -f [...files] -d [...data]`)
  $(`  $ ${name} <flags> [...files] [data]`)

  $()
  $(`  $ ${name} -f [...files] -d [...data] <flags>`)
  $(`  $ ${name} [...files] [data] <flags>`)

  $()
  $('Examples:')
  $(`  $ ${name} -f README.md -d data.json`)
  // $(`  $ ${name} -f README* -d data.yaml`)

  $()
  $(`  $ ${name} README.md data.yml`)
  // $(`  $ ${name} README1* README2* data*`)

  $()
  $('Options:')
  $('  -f, --file, --files   file(s) to process')
  $('  -d, --data            data to use')

  $()
  $('  -v, --version   output the version number')
  $(`  -h, --help      display help for ${name}`)
}
