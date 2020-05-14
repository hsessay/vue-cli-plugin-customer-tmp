// 一些全局的config配置
const modeUrlObj = {
  // 生产环境
  production: {
    orginUrl: window.location.origin,
    domain: location.protocol + '//t.hanhua.com',
    basePath: process.env.VUE_APP_BASEURL,
    fmBankNo: '8808001000322821', // 富民商户号
    baiduAk: 'qaHv1ASHKazGKMPuMp9feXbm4WpSRL' // 需要申请还是用开发ak?
  },
  // 预生产环境
  preproduction: {
    orginUrl: window.location.origin,
    domain: location.protocol + '//www.hanhuatong.com.cn',
    basePath: process.env.VUE_APP_BASEURL,
    fmBankNo: '8808001000322821',
    fmMerchantNo: '',
    baiduAk: 'qaHv1ASHKazGKMPuMp9feXbm4WpSRL'
  },
  // 开发环境
  development: {
    orginUrl: window.location.origin,
    domain: location.protocol + '//htsit.hanhua.com',
    basePath: '',
    fmBankNo: '8808001000322821',
    baiduAk: 'qaHv1ASHKazGKMPuMp9feXbm4WpSRL'
  },
  // 测试环境
  sit: {
    orginUrl: window.location.origin,
    domain: location.protocol + '//htsit.hanhua.com',
    basePath: process.env.VUE_APP_BASEURL,
    fmBankNo: '8808001000322821',
    baiduAk: 'qaHv1ASHKazGKMPuMp9feXbm4WpSRL'
  },
  // 测试环境
  uat: {
    orginUrl: window.location.origin,
    domain: location.protocol + '//htuat.hanhua.com',
    basePath: process.env.VUE_APP_BASEURL,
    fmBankNo: '8808001000322821',
    baiduAk: 'qaHv1ASHKazGKMPuMp9feXbm4WpSRL'
  }
}
const configObj = {
  ...modeUrlObj[process.env.NODE_ENV],
  serviceLink: 'http://uchat.im-cc.com/webchat_new/static/html/index.html?ht=7051'
}
// export default modeUrlObj[process.env.NODE_ENV]
export default configObj
