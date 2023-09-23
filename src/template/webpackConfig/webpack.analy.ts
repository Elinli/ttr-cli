export const webpackAnalyConfig = () => {
  return `const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const { merge } = require('webpack-merge')
const prodConfog = require('./webpack.prod')
const smp = new SpeedMeasurePlugin()
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
module.exports = smp.wrap(
  merge(prodConfog, {
    plugins: [
      new BundleAnalyzerPlugin(), // 配置分析打包结果插件
    ],
  })
)
`
}
