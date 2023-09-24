import { getPath } from './../utils/path'
import { writeInPkg } from './../utils/tool'
import fs from 'fs-extra'
import { webpackBaseConfig } from '../template/webpack.base'
import { webpackAnalyConfig } from '../template/webpack.analy'
import { webpackDevConfig } from '../template/webpack.dev'
import { webpackProdConfig } from '../template/webpack.prod'
// import { getPackageJson } from '../utils/env'
import { debugError } from '../utils/debug'

const dependencies = ['react@^18.2.0', 'react-dom@^18.2.0']

const baseDevDep = [
  '@babel/core@^7.22.20',
  '@babel/plugin-proposal-decorators@^7.22.15',
  '@babel/preset-env@^7.22.20',
  '@babel/preset-react@^7.22.15',
  '@babel/preset-typescript@^7.22.15',
  '@pmmmwh/react-refresh-webpack-plugin@^0.5.11',
  'autoprefixer@^10.4.15',
  'babel-loader@^9.1.3',
  'compression-webpack-plugin@^10.0.0',
  'copy-webpack-plugin@^11.0.0',
  'core-js@^3.32.2',
  'cross-env@^7.0.3',
  'css-loader@^6.8.1',
  'glob-all@^3.3.1',
  'html-webpack-plugin@^5.5.3',
  'mini-css-extract-plugin@^2.7.6',
  'postcss-loader@^7.3.3',
  'purgecss-webpack-plugin@^5.0.0',
  'react-refresh@^0.14.0',
  'sass@^1.67.0',
  'sass-loader@^13.3.2',
  'speed-measure-webpack-plugin@^1.5.0',
  'style-loader@^3.3.3',
  'thread-loader@^4.0.2',
  'typescript@^5.2.2',
  'webpack@^5.88.2',
  'webpack-bundle-analyzer@^4.9.1',
  'webpack-cli@^5.1.4',
  'webpack-dev-server@^4.15.1',
  'webpack-merge@^5.9.0',
]

// const scripts = {
//   'dev:dev':
//     'cross-env NODE_ENV=development BASE_ENV=development webpack-dev-server -c build/webpack.dev.js',
//   'dev:test':
//     'cross-env NODE_ENV=development BASE_ENV=test webpack-dev-server -c build/webpack.dev.js',
//   'dev:pre':
//     'cross-env NODE_ENV=development BASE_ENV=pre webpack-dev-server -c build/webpack.dev.js',
//   'dev:prod':
//     'cross-env NODE_ENV=development BASE_ENV=production webpack-dev-server -c build/webpack.dev.js',
//   'build:dev':
//     'cross-env NODE_ENV=production BASE_ENV=development webpack -c build/webpack.prod.js',
//   'build:test':
//     'cross-env NODE_ENV=production BASE_ENV=test webpack -c build/webpack.prod.js',
//   'build:pre':
//     'cross-env NODE_ENV=production BASE_ENV=pre webpack -c build/webpack.prod.js',
//   'build:prod':
//     'cross-env NODE_ENV=production BASE_ENV=production webpack -c build/webpack.prod.js',
//   'build:analy':
//     'cross-env NODE_ENV=production BASE_ENV=production webpack -c build/webpack.analy.js',
// }
export const webpackInit = async () => {
  let devDependencies: string[] = baseDevDep
  await writeInPkg(devDependencies, 'devDependencies')
  await writeInPkg(dependencies, 'dependencies')

  try {
    fs.outputFileSync(getPath('./build/webpack.base.js'), webpackBaseConfig())
    fs.outputFileSync(getPath('./build/webpack.prod.js'), webpackProdConfig())
    fs.outputFileSync(getPath('./build/webpack.dev.js'), webpackDevConfig())
    fs.outputFileSync(getPath('./build/webpack.analy.js'), webpackAnalyConfig())
  } catch (error) {
    debugError(`======error=======${error}`)
  }
}
