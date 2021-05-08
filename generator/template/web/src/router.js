import Vue from 'vue'
import Router from 'vue-router'

// import { Toast } from 'vant'
// import { openIdLogin, getUserInfo } from './api/common-service'
// import config from './config'
// import manager from '@htong/access-control-manager'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { path: '/home' }
      // meta: { noLoginAuth: true }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@views/home/home.vue')
    }
  ]
})

// 全局前置路由权鉴
// router.beforeEach((to, from, next) => {
//   next()
// })

export default router
