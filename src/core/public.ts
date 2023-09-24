publicConfig
import fs from 'fs-extra'
import { publicConfig } from '../template/publicConfig'

export const tsconfigInit = async () => {
  fs.outputFileSync('./public/index.html', publicConfig())
}
