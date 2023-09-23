import { writeInPkg, run } from '../utils/tool'
import fs from 'fs-extra'
import { getPackageJson } from '../utils/env'
import { getPath } from '../utils/path'
import { debugInfo, debugWarning } from '../utils/debug'
import { pathExists } from '../utils/check'

// 需要安装的依赖
const devDependencies = ['husky@^8.0.1', 'lint-staged@^12.4.1']

export const huskyInit = async () => {
  // 检查是否有git 如果没有 需要先初始化git
  if (!(await pathExists('.git', false))) {
    debugWarning(`请先初始化git`)
    debugInfo('参考命令 git init')
    process.exit()
  }
  // 安装依赖
  await writeInPkg(devDependencies)
  // 更改package
  let pkgJson = await getPackageJson()
  pkgJson.scripts['prepare'] = 'husky install'
  pkgJson.scripts['pre-commit'] = 'lint-staged'
  pkgJson.scripts['postinstallmac'] =
    'git config core.hooksPath .husky && chmod 700 .husky/*'
  pkgJson.scripts['eslint'] =
    'eslint --cache --max-warnings 0  "{src,mock}/**/*.{vue,ts,js,tsx}" --fix'
  pkgJson['lint-staged'] = {
    '*.{js,ts,vue,jsx,tsx}': ['npm run eslint'],
    '*.{js,jsx,ts,tsx,md,html,css,lees,scss,sass}': 'prettier --write',
  }
  pkgJson.scripts[
    'dev-dev'
  ] = `cross-env NODE_ENV=development BASE_ENV=development webpack-dev-server -c build/webpack.dev.js`
  pkgJson.scripts[
    'dev-test'
  ] = `cross-env NODE_ENV=development BASE_ENV=test webpack-dev-server -c build/webpack.dev.js`
  pkgJson.scripts[
    'dev-pre'
  ] = `cross-env NODE_ENV=development BASE_ENV=pre webpack-dev-server -c build/webpack.dev.js`
  pkgJson.scripts[
    'dev-prod'
  ] = `cross-env NODE_ENV=development BASE_ENV=production webpack-dev-server -c build/webpack.dev.js`
  pkgJson.scripts[
    'build-dev'
  ] = `cross-env NODE_ENV=production BASE_ENV=development webpack -c build/webpack.prod.js`
  pkgJson.scripts[
    'build-test'
  ] = `cross-env NODE_ENV=production BASE_ENV=test webpack -c build/webpack.prod.js`
  pkgJson.scripts[
    'build-pre'
  ] = `cross-env NODE_ENV=production BASE_ENV=pre webpack -c build/webpack.prod.js`
  pkgJson.scripts[
    'build-prod'
  ] = `cross-env NODE_ENV=production BASE_ENV=production webpack -c build/webpack.prod.js`
  pkgJson.scripts[
    'build-analy'
  ] = `cross-env NODE_ENV=production BASE_ENV=production webpack -c build/webpack.analy.js`
  fs.writeJsonSync(getPath('package.json'), pkgJson, { spaces: 2 })

  await run('npm run prepare')
  await run('npx husky add .husky/pre-commit "npm-run-pre-commit"')
}
