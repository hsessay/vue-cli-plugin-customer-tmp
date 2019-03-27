const path = require('path')
// const resolve = folder => path.resolve(__dirname, folder)
 
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
  } 
}
