
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
      redirect: {name: 'login'}
    }, 
    { 
      path: '/login', // 登录页面
      name: 'login', 
      component: () => import('./views/login/LoginPage.vue'),
      meta: { noLoginAuth: true }
    }
  ]
})

// 全局前置路由权鉴
router.beforeEach((to, from, next) => {
  if (!to.meta.noLoginAuth && !Vue.prototype.$userInfo) {
    let { openid, token } = to.query
    let loginPath = `${config.orginUrl}${config.basePath}/login?redirect=${config.orginUrl}${config.basePath}${to.fullPath}`
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
      }).catch(() => {
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
