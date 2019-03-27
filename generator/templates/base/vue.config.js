 
module.exports = {   
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
