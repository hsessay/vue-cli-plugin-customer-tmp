const glob = require('glob')
const path = require('path')
const resolve = folder => path.resolve(__dirname, folder)

/**
 * 样式预处理器全局变量资源插件
 * @param {String} rule webpack 规则
 */
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve('./src/assets/<%= options.cssPreprocessor%>/var.<%= options.cssPreprocessor%>'),
      ],
    })
} 

module.exports = { 
  // 自定义webpack配置
  configureWebpack: {
    cache: true,
    plugins: [],
    performance: {
      hints: false
    },
    optimization: {
      runtimeChunk: process.env.NODE_ENV === 'production' ? { name: 'manifest' } : false,
      splitChunks: {
        automaticNameDelimiter: '--',
        cacheGroups: {
          vendors: {
            name: 'vendors',
            chunks: 'initial',
            test: /[\\/]node_modules[\\/]/,
            priority: 2
          },
          vue: {
            name: 'vue-common',
            test: (module) => {
              return /vue|flyio/g.test(module.context)
            },
            chunks: 'initial',
            priority: 10
          },
          vant: {
            name: 'vant',
            test: module => /vant/g.test(module.context),
            chunks: 'initial',
            priority: 10
          }
        }
      }
    }
  },

  // 扩展webpack配置
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    config.plugins.delete('preload') 
    // 目录别名
    config.resolve
            .alias
              .set('vue$', resolve('./node_modules/vue/dist/vue.common.js'))
              .set('assets', resolve('src/assets'))
              .set('components', resolve('src/components')) 
              .set('views', resolve('src/views')) 
              .set('API', resolve('src/api'))

    // 添加 css 全局变量资源插件
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(
      type => addStyleResource(config.module.rule('<%= options.cssPreprocessor%>').oneOf(type))
    )
  },

  // 开发服务器配置
  devServer: { 
    proxy: {
      '/api': {
        target: 'http://htsit.hanhua.com' 
      },
      '/tong2': {
        target: 'http://htsit.hanhua.com' 
      },
      '/dcloud': {
        target: 'http://htsit.hanhua.com'
      }
    }
  }, 

  // 插件配置
  pluginOptions: {
    
  }
}
