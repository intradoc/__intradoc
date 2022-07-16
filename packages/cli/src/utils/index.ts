const nodeGlob = require('glob')

export const glob = async (path: string) => {
  return new Promise<string[]>(
    (resolve, reject) => {
      nodeGlob(
        path,
        {},
        (error: any, files: string[]) => {
          if (error) {
            reject(error)
          } else {
            resolve(files)
          }
        }
      )
    }
  )
}

// -----------------------------------------------------------------------------

import { normalize } from 'node:path'
import { stat, pathExists } from 'fs-extra'

export const fileExists = async (path: string) => {
  path = normalize(path)

  if (await pathExists(path)) {
    const stats = await stat(path)

    if (stats.isFile()) {
      return true
    }
  }

  return false
}

// -----------------------------------------------------------------------------

import { extname } from 'node:path'
import { readFile } from 'fs-extra'

export const loadFile = async (path: string) => {
  let extension = extname(path)

  if (extension) {
    extension = extension.substring(1).toLowerCase()
  }

  return {
    content: await readFile(path, { encoding: 'utf-8' }),
    extension,
  }
}

// -----------------------------------------------------------------------------

import { writeFile } from 'fs-extra'

export const saveFile = async (path: string, data: string) => {
  return writeFile(path, data)
}
