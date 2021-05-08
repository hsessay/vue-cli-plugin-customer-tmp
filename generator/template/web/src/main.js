import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elemtComponents from './assets/js/element-components'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
// UI组件集合
Vue.use(elemtComponents)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
