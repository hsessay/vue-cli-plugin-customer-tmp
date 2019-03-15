/*
  模板默认网络模块，网络请求服务管理文件
  新增服务请遵循格式进行增删
  add by zxy at 2019-03-14 17:19:18
*/
import api from './api';
import network from './network';

/*
示例如下

// 登录接口
export function getLoginData (params) {
  return network.get (api.loginUrl, params);
}

// 微信公众号登录
export function getWXOpenLoginData (openid) {
  return network.get (api.wxOpenLoginUrl, openid);
}

*/