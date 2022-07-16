import type { AppOptions } from '../types'

export class App {
  private _name:     string
  private _version:  string
  private _homepage: string
  private _license:  string
  private _author:   string
  private _flags:    string[] = []

  constructor (options: AppOptions) {
    this._name     = options.name
    this._version  = options.version
    this._homepage = options.homepage
    this._license  = options.license
    this._author   = options.author
  }

  getName () {
    return this._name
  }

  getVersion () {
    return this._version
  }

  getHomepage () {
    return this._homepage
  }

  getLicense () {
    return this._license
  }

  getAuthor () {
    return this._author
  }

  addFlags (flags: Readonly<string[]>) {
    this._flags.push(...flags)
    return this
  }

  isFlag (value: any) {
    return this._flags.includes(value)
  }
}

export const createApp = (options: AppOptions) => {
  return new App(options)
}
