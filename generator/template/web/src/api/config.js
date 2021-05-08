import networks from '@htong/net'
// import store from '@/store'
import { Toast } from 'vant'
import router from '@/router'
const { sysPoint } = networks

export function xdpartner (params, config, datas) {
  if (config._code) {
    // TODO: 改为相应系统的endpoint code
    config._proxy = { point: 'pnr.customer', code: config._code }
  }
  const token = localStorage && localStorage.getItem('xdptoken') // TODO: 改为相应系统的缓存token值
  if (token) {
    config.headers = { 'x-access-token': token, ...config.headers }
  }
  return sysPoint.customer(params, config, datas).then(res => {
    if (res.code === 401) { // TODO: 改为相应系统的缓存错误码
      emptyTkInfo(res)
    }
    return res
  })
}


function emptyTkInfo (res) {
  if (res.code === 401) { // token 过期
    Toast('登录信息失效，请重新登录')
    // store.commit('LOG_OUT')
    setTimeout(() => {
      router.push('/login')
    }, 0)
  }
}

export function request (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.onload = () => {
      resolve(xhr.responseText)
    }
    xhr.onerror = err => {
      reject(err)
    }
    xhr.send(null)
  })
}
