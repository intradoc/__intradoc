import { App } from '../App'

export const printVersion = (app: App) => {
  console.log(`v${app.getVersion()}`)
}
