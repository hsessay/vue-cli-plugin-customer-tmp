/*
  模板默认网络模块，基础配置文件
  add by zxy at 2019-03-14 17:19:18
*/  
import Fly from 'flyio/dist/npm/fly';
// import {Dialog, Toast} from 'vant';

const fly = new Fly (); 
// 添加请求拦截器
fly.interceptors.request.use (request => {
  return request;
});

// 添加响应拦截器
fly.interceptors.response.use (
  response => {
    // wx.hideLoading()
    return response.data; // 请求成功之后将返回值返回
  },
  err => {
    // 请求出错，根据返回状态码判断出错原因
    console.log (err);
    // wx.hideLoading()
    if (err) {
      return '请求失败';
    }
  }
);

export default {
  /*
    *  get 请求
    *
    *  @param url 请求相对url
    *  @param params 请求参数
    *  @description 基于 Promise 实现，通过 .then() 添加请求成功处理方法，.catch() 添加请求错误处理方法
    *
    * */
  get: function (url, params, withoutLoading) {
    return new Promise (function (resolve, reject) {
      if (!withoutLoading) {
        // Toast.loading ({
        //   duration: 0, // 持续展示 toast
        //   forbidClick: true, // 禁用背景点击
        //   loadingType: 'spinner',
        //   message: '加载中...',
        // });
      }
      fly
        .get (url, {
          params: params,
        })
        .then (function (response) {
          // Toast.clear ();
          if (response.data.code === '200') {
            resolve (
              response.data.datas ? response.data.datas : response.data.data
            );
          } else {
            // Dialog.alert ({
            //   message: response.data.message,
            // });
            return Promise.reject (response);
          }
        })
        .catch (function (error) {
          // Toast.clear ();
          // Dialog.alert ({
          //   message: '网络请求错误',
          // });
          if (error.notRealPromiseException) {
            // 主动中断 Promise 链
            return true;
          }
          reject (error);
        });
    });
  },
  /*
  *  post 请求
  *
  *  @param url 请求相对url
  *  @param params 请求参数
  *  @param isHideLoading 是否隐藏进度条
  *  @description 基于 Promise 实现，通过 .then() 添加请求成功处理方法，.catch() 添加请求错误处理方法
  *
  * */
  post: function (url, params, withoutLoading) {
    return new Promise (function (resolve, reject) {
      if (!withoutLoading) {
        // Toast.loading ({
        //   duration: 0, // 持续展示 toast
        //   forbidClick: true, // 禁用背景点击
        //   loadingType: 'spinner',
        //   message: '加载中...',
        // });
      } 
      fly
        .post (
          url,
          params
          // ,
          // {
          // headers: {
          //   authKey: 'hht',
          // },
        )
        .then (function (response) {
          // Toast.clear ();
          if (response.data.code === '200') {
            resolve (
              response.data.data ? response.data.data : response.data.datas
            );
          } else {
            // Dialog.alert ({
            //   message: response.data.message,
            // });
            return Promise.reject (response);
          }
        })
        .catch (function (error) {
          // Toast.clear ();
          if (error.notRealPromiseException) {
            // 主动中断 Promise 链
            return true;
          }
          reject (error);
        });
    });
  },
};
