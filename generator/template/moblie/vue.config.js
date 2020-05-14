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
  productionSourceMap: (process.env.NODE_ENV !== 'production') && (process.env.NODE_ENV !== 'preproduction'),
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
  },
  css: {
    loaderOptions: {
      sass: {
        // @是src的别名
        data: `@import "@/assets/css/variable.scss";`
      }
    }
  },
  transpileDependencies: ['@htong/common', '@htong/networks', '@htong/verification'],
  /**
   * 本地代理配置
   * 完整选项：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
   */
  devServer: {
    proxy: {
      '/esb': {
        target: 'http://htsit.hanhua.com' // http://t.hanhua.com
        // target: 'http://t.hanhua.com'
      },
      '/api': {
        target: 'http://htsit.hanhua.com'
        // target: 'http://t.hanhua.com'
      },
      '/tong2': {
        target: 'http://htsit.hanhua.com'
        // target: 'http://t.hanhua.com'
      },
      '/dcloud': {
        target: 'http://htsit.hanhua.com'
        // target: 'http://t.hanhua.com'
      },
      '/hhcrq-api': {
        target: 'http://htsit.hanhua.com'
        // target: 'http://t.hanhua.com'
      },
      '/anshuo-api': {
        target: 'http://htsit.hanhua.com'
        // target: 'http://t.hanhua.com'
        // target: 'http://10.10.80.206:9085'
      },
      '/perbank': {
        target: 'http://10.10.80.78:9082'
      }
    }
  }
}
