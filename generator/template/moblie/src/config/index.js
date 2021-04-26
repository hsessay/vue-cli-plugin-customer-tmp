// 一些全局的config配置
const modeUrlObj = {
  // 生产环境
  production: {
    orginUrl: window.location.origin,
    domain: location.protocol + '//t.hanhua.com',
    basePath: process.env.VUE_APP_BASEURL,
    downloadUrl: '',
    uploadUrl: ''
  },
  // 开发环境
  development: {
    orginUrl: window.location.origin,
    domain: location.protocol + '//htsit.hanhua.com',
    basePath: '',
    downloadUrl: '',
    uploadUrl: ''
  },
  // 测试环境
  sit: {
    orginUrl: window.location.origin,
    domain: location.protocol + '//htsit.hanhua.com',
    basePath: process.env.VUE_APP_BASEURL,
    downloadUrl: '',
    uploadUrl: ''
  },
  // 测试环境
  uat: {
    orginUrl: window.location.origin,
    domain: location.protocol + '//htuat.hanhua.com',
    basePath: process.env.VUE_APP_BASEURL,
    downloadUrl: '',
    uploadUrl: ''
  }
}
const configObj = {
  ...modeUrlObj[process.env.NODE_ENV],
  serviceLink: 'http://uchat.im-cc.com/webchat_new/static/html/index.html?ht=7051'
}
// export default modeUrlObj[process.env.NODE_ENV]
export default configObj
