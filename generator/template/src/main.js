import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; 
import Vconsole from 'vconsole';
import utils from './assets/js/common'; 
import WXConfig from './assets/js/weixin'; // 微信分享
Vue.prototype.WXConfig = WXConfig;

// 按需引入vant提供的组件，以便减少包大小
import { 
  Button, Cell, Popup, Checkbox, CheckboxGroup, DatetimePicker,
  Field, Picker, RadioGroup, Radio, Search, Slider, Stepper,Switch,
  SwitchCell, Uploader, Actionsheet, Dialog, Loading, CellGroup
} from 'vant';

Vue.use(Button).use(Cell).use(Popup).use(Checkbox).use(CheckboxGroup)
   .use(DatetimePicker).use(Field).use(Picker).use(RadioGroup).use(Radio)
   .use(Search).use(Slider).use(Stepper).use(Switch).use(SwitchCell)
   .use(Uploader).use(Actionsheet).use(Dialog).use(Loading).use(CellGroup)


const vConsole = new Vconsole (); 
Vue.use (vConsole); 
Vue.config.productionTip = false; 

// let vue = 
new Vue ({
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
 