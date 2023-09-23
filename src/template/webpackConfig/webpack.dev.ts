export const webpackDevConfig = () => {
  return `const path = require('path')
const { merge } = require('webpack-merge')
const ReactRefresh = require('@pmmmwh/react-refresh-webpack-plugin')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 8080,
    compress: false,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public'),
    },
  },
  plugins: [new ReactRefresh()],
})
`
}
