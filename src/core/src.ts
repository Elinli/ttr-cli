import fs from 'fs-extra'
import { reactIndexConfig } from '../template/react.index'
import { reactAppConfig } from '../template/react.app'
import { reactScssConfig } from '../template/react.scss'
import { reactImageConfig } from '../template/react.images'

export const srcInit = async () => {
  fs.outputFileSync('./src/index.ts', reactIndexConfig())
  fs.outputFileSync('./src/App.ts', reactAppConfig())
  fs.outputFileSync('./src/app.scss', reactScssConfig())
  fs.outputFileSync('./src/images.d.ts', reactImageConfig())
}
