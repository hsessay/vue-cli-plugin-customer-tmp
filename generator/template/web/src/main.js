import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; 
import Vconsole from 'vconsole';
import utils from './assets/js/common';  

// 按需引入element-ui提供的组件，以便减少包大小
import { Button } from 'element-ui';
Vue.use(Button) 

// let vue = 
new Vue ({
  store,
  router,
  render: h => h (App),
}).$mount ('#app');
 
 