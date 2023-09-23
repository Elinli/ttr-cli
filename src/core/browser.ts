import fs from 'fs-extra'
import { browserConfig } from '../template/browserrc'

export const browserInit = async () => {
  fs.outputFileSync('./.browserslistrc', browserConfig())
}
