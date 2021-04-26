import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vconsole from 'vconsole'
// import WXConfig from './assets/js/weixin'
import VantComponents from './assets/js/vant-components'
// import './assets/js/base64.min'

// 微信分享
// Vue.prototype.WXConfig = WXConfig

const isDebug = util.stringToObject(document.location.href).isDebug === '1'
if (process.env.NODE_ENV !== 'production' || isDebug) {
// if (isDebug) {
  const vConsole = new Vconsole()
  Vue.use(vConsole)
  Vue.config.productionTip = false
}
// vant组件集合
Vue.use(VantComponents)

// let vue =
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
