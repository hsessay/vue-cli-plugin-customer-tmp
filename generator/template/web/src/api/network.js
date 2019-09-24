/*
  模板默认网络模块，基础配置文件
  add by zxy at 2019-03-14 17:19:18
*/
import Fly from 'flyio/dist/npm/fly'
// import { Toast } from 'vant'
import config from '../config'
let Base64 = require('js-base64').Base64

const fly = new Fly()
fly.baseURL = config.api

// 添加请求拦截器
function _appCtx () {
  return JSON.stringify({
    sh: window.screen.height || 0,
    sw: window.screen.width || 0,
    lng: navigator.language || '',
    tt: document.title || '',
    ce: navigator.cookieEnabled || false,
    ptm: new Date().format('yyyy-MM-dd hh:mm:ss') || ''
  })
}
fly.interceptors.request.use(request => {
  let hhtAppCtx = Base64.encode(_appCtx())
  fly.config.headers['HHTAPPCTX'] = hhtAppCtx
  // fly.config.headers['Cookie'] = Base64.encode(_appCtx()) // 拒绝设置Cookie!!!
  document.cookie = 'HHTAPPCTX=' + hhtAppCtx + '; path=/'
  return request
})

// 添加响应拦截器
fly.interceptors.response.use(
  response => {
    if (!(process.env.NODE_ENV !== 'production')) {
      console.log(response)
    }
    return response.data // 请求成功之后将返回值返回
  },
  err => {
    // 请求出错，根据返回状态码判断出错原因
    if (!(process.env.NODE_ENV !== 'production')) {
      console.log(err)
    }
    // wx.hideLoading()
    if (err) {
      return '请求失败'
    }
  }
)

export default {
  /*
    *  get 请求
    *
    *  @param url 请求相对url
    *  @param params 请求参数
    *  @description 基于 Promise 实现，通过 .then() 添加请求成功处理方法，.catch() 添加请求错误处理方法
    *
    * */
  setHeaderAuth: function (token) {
    if (token) {
      fly.config.headers['login_token'] = token
      fly.config.headers['htk'] = token
    }
  },
  get: function (url, params, config = {}) {
    return new Promise(function (resolve, reject) {
      if (!config.hideLoading) {
        // Toast.loading({
        //   duration: 0, // 持续展示 toast
        //   forbidClick: true, // 禁用背景点击
        //   loadingType: 'spinner',
        //   message: '加载中...'
        // })
      }
      fly.get(url, params).then(function (response) {
        // Toast.clear()
        if (process.env.NODE_ENV !== 'production') {
          console.log(response)
        }
        resolve(response)
      }).catch(function (error) {
        // Toast.clear()
        reject(error)
      })
    })
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
  post: function (url, params, config = {}) {
    return new Promise(function (resolve, reject) {
      if (!config.hideLoading) {
        // Toast.loading({
        //   duration: 0, // 持续展示 toast
        //   forbidClick: true, // 禁用背景点击
        //   loadingType: 'spinner',
        //   message: '加载中...'
        // })
      }
      fly.post(url, params).then(function (response) {
        if (process.env.NODE_ENV !== 'production') {
          console.log(response)
        }
        // Toast.clear()
        resolve(response)
      }).catch(function (error) {
        // Toast.clear()
        reject(error)
      })
    })
  }
}
