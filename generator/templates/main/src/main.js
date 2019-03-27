import Vue from 'vue';
import App from './App.vue';


let vue = new Vue ({
  store,
  router,
  render: h => h (App),
}).$mount ('#app');
 

var isiOS = !!navigator.userAgent.match (/\(i[^;]+;( U;)? CPU.+Mac OS X/); //这个判断 是不是ios手机 
if (utils.isWeixin && isiOS) {
  document.body.addEventListener ('focusout', () => {
    window.scrollTo ({top: 0, left: 0, behavior: 'smooth'}); //重点  =======当键盘收起的时候让页面回到原始位置
  });
}
 