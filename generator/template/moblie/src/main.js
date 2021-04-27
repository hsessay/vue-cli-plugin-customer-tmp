import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vconsole from 'vconsole'
import VantComponents from './assets/js/vant-components'
import utils from '@htong/common'

const isDebug = utils.stringToObject(document.location.href).isDebug === '1'
if (process.env.NODE_ENV !== 'production' || isDebug) {
// if (isDebug) {
  const vConsole = new Vconsole()
  Vue.use(vConsole)
  Vue.config.productionTip = false
}
// vant组件集合
Vue.use(VantComponents)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
