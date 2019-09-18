import Vue from 'vue'
import Router from 'vue-router'

import { openIdLogin, getUserInfo } from './api/common-service'
import config from './config'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'login' }
    },
    {
      path: '/login', // 登录页面
      name: 'login',
      meta: { noLoginAuth: true },
      component: () => import('./views/login/LoginPage.vue')
    }
  ]
})

// 全局前置路由权鉴
router.beforeEach((to, from, next) => {
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
