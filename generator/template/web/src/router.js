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
  let openid = to.query.openid || '';
  if (openid) {
    util.session.setItem('OPEN_ID', openid, true);
    setUserContext({openId:openid}).then(()=>{});
  }
  if (!to.meta.noLoginAuth && !Vue.prototype.$userInfo) {
    let token = to.query.token
    let loginPath = `${config.orginUrl}${config.basePath}/login?redirect=${encodeURIComponent(location.href)}`;
    if(to.meta.needIdNo){
      loginPath += `&needIdNo=${to.meta.needIdNo}`
    }
    if (token) {
      // token登录
      loginWithToken(token,next,loginPath)
    } else if (openid && openid.length > 0) {
      // opneid登陆
      loginWithOpenId(openid,next,loginPath)
    } else {
      window.location.href = loginPath
    }
  } else {
    next()
  }
})

function loginWithToken(token,next,loginPath) {
  getUserInfo(token).then(res => {
    if (res.success) {
      Vue.prototype.$userInfo = res.model
      console.log(Vue.prototype.$userInfo)
      next()
    } else {
      Toast(res.message || '网络错误')
      setTimeout(() => {
        window.location.href = loginPath
      }, 1800);
    }
  }).catch(() => {
    window.location.href = loginPath
  })
}

function loginWithOpenId(openid,next,loginPath) {
  openIdLogin(openid).then(res => {
    if (res.success) {
      Vue.prototype.$userInfo = res.model
      next()
    } else {
      Toast(res.message || '网络错误')
      setTimeout(() => {
        window.location.href = loginPath
      }, 1800);
    }
  })
}
export default router
