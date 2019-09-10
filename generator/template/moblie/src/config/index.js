// 一些全局的config配置
const modeUrlObj = {
  // 生产环境
  'production': {
    orginUrl: window.location.origin,
    api: 'https://t.hanhua.com/',
    basePath: process.env.VUE_APP_BASEURL
  },
  // 预生产环境
  'preproduction': {
    orginUrl: window.location.origin,
    api: 'http://www.hanhuatong.com.cn',
    basePath: process.env.VUE_APP_BASEURL
  },
  // 开发环境
  'development': {
    orginUrl: window.location.origin,
    api: 'http://htsit.hanhua.com/',
    basePath: ''
  },
  // 测试环境
  'sit': {
    orginUrl: window.location.origin,
    api: 'http://htsit.hanhua.com/',
    basePath: process.env.VUE_APP_BASEURL
  },
  // 测试环境
  'uat': {
    orginUrl: window.location.origin,
    api: 'http://htuat.hanhua.com/',
    basePath: process.env.VUE_APP_BASEURL
  }
}
export default modeUrlObj[process.env.NODE_ENV]
