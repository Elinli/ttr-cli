import fs from 'fs-extra'
import { tsconfig } from '../template/tsconfig'

export const tsconfigInit = async () => {
  fs.outputFileSync('./tsconfig.ts', tsconfig())
}
