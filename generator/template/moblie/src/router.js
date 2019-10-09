import Vue from 'vue'
import Router from 'vue-router'

import { Toast } from 'vant'
import { openIdLogin, getUserInfo } from './api/common-service'
import config from './config'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { path: '/empty' }
      // meta: { noLoginAuth: true }
    },
    {
      path: '/empty',
      name: 'empty',
      component: () => import('./components/EmptyView.vue')
    },
  ]
})

// 全局前置路由权鉴
router.beforeEach((to, from, next) => {
  if (to.name === 'empty') {
    let domain = process.env.VUE_APP_DOMAIN
    window.location.href = domain
    return
  }

  if (!to.meta.noLoginAuth && !Vue.prototype.$userInfo) {
    let { openid, token } = to.query
    let loginPath = `${config.api}${config.basePath}/login?redirect=${config.orginUrl}${config.originBasePath}${to.fullPath}`
    if (openid) {
      // opneid登陆
      openIdLogin(openid).then(res => {
        if (res.success) {
          Vue.prototype.$userInfo = res.model
          next()
        } else {
          Toast(res.message || '网络错误')
          window.location.href = loginPath
        }
      })
    } else if (token) {
      // token登录
      getUserInfo(token).then(res => {
        if (res.success) {
          Vue.prototype.$userInfo = res.model
          console.log(Vue.prototype.$userInfo)
          next()
        } else {
          Toast(res.message || '网络错误')
          window.location.href = loginPath
        }
      }).catch((err) => {
        console.log(err)
        window.location.href = loginPath
      })
    } else {
      window.location.href = loginPath
    }
  } else {
    next()
  }
})

export default router
