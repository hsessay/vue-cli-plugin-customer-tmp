// const fs = require('fs')
const path = require('path')

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
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/api/', 
  filenameHashing: true, 
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true, 
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 preload 插件
    config.plugins.delete('preload')

    // 路径别名
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'))
      .set('@api', path.resolve(__dirname, './src/api')) 
      .set('@assets', path.resolve(__dirname, './src/assets'))
      .set('@comps', path.resolve(__dirname, './src/components'))
      .set('@views', path.resolve(__dirname, './src/views'))  
  },
  css: {
    loaderOptions: {
        sass: {
          // @是src的别名
          data: `@import "@/assets/css/variable.scss";`
        }
    }
  },
  /**
   * 本地代理配置
   * 完整选项：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
   */
  devServer: {
    proxy: {
      '/esb': {
        target: 'http://htsit.hanhua.com' // 注意：访问esb接口时，需在原esb接口path之前增加esb
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
        target: 'http://htsit.hanhua.com'  // 注意：访问安硕接口时，需在原安硕接口path之前增加anshuo-api
        // target: 'http://t.hanhua.com' 
      }
    }
  }
}
