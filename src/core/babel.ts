import fs from 'fs-extra'
import { babelConfig } from '../template/babel.config'

export const babelInit = async () => {
  fs.outputFileSync('./babel.config.js', babelConfig())
}
