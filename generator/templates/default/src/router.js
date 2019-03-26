import Vue from 'vue'
import Router from 'vue-router' 

Vue.use(Router) 

export default new Router({
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
      component: () => import('./views/login/LoginWarranty.vue'),
      props: true 
    } 
  ]
})
