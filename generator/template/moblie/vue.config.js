// const fs = require('fs')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
/**
 * 生成多页面配置
 * @param {string} pagesDir 多页面文件夹相对路径
 */
// const generatePagesConfig = ({ pagesDir, customConfig = {} }) => {
//   // 多页面文件夹目录
//   const PAGES_DIR = path.resolve(__dirname, pagesDir)
//   let pagesConfig = {}

//   // 读取多页面目录生成 vue.config.js 中的 pages 配置
//   if (!fs.existsSync(PAGES_DIR)) {
//     throw Error('vue.config.js pages 配置路径不存在')
//   }

//   fs.readdirSync(PAGES_DIR)
//     .filter(pageDir => !pageDir.startsWith('.'))
//     .reduce((pagesConfig, fileName) => {
//       pagesConfig[fileName] = {
//         // page 的入口
//         entry: path.resolve(PAGES_DIR, fileName, 'index.js'),
//         template: path.resolve(PAGES_DIR, fileName, 'index.html'),
//         // 在 dist/index.html 的输出
//         filename: `${fileName}.html`
//       }
//       return pagesConfig
//     }, pagesConfig)

//   return {
//     ...pagesConfig,
//     ...customConfig
//   }
// }

module.exports = {
  // publicPath: process.env.NODE_ENV === 'development' ? '/' : '/vue/tong/v1',
  publicPath: process.env.VUE_APP_BASEURL,
  filenameHashing: true,
  productionSourceMap: false,
  chainWebpack: config => {
    // 添加分析工具
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpach-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugin.delete('predetch')
      }
    }
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 preload 插件
    config.plugins.delete('preload')

    // 路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('/src/assets'))
      .set('@comps', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@js', resolve('src/assets/js/*'))
      .set('@config', resolve('src/config/*'))
  },
  css: {
    loaderOptions: {
      sass: {
        // @是src的别名
        data: `@import "@/assets/css/variable.scss";`
      }
    }
  },
  transpileDependencies: ['@htong/net'],
  /**
   * 本地代理配置
   * 完整选项：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
   */
  devServer: {
    proxy: {
      '/apiproxy': {
        target: 'http://htsit.hanhua.com'
      }
    }
  }
}
