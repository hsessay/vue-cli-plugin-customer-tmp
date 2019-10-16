/*
  模板默认网络模块，网络请求服务管理文件
  新增服务请遵循格式进行增删
  add by zxy at 2019-03-14 17:19:18
*/
import commonApi from './common-api'
import network from './network'
import util from '../assets/js/common'
import Vue from 'vue'

/* **************************** 登录相关 *******************************/

// 密码登陆
export function loginPwd (params) {
  return network.post(`${commonApi.loginPwd}?${util.objectToQuery(params)}`, params).then(res => {
    saveUserInfo(res)
    return res
  })
}

// 验证码登录
export function msgLogin (params) {
  return network.post(`${commonApi.msgLogin}?${util.objectToQuery(params)}`, params).then(res => {
    saveUserInfo(res)
    return res
  })
}

// openid登陆
export function openIdLogin (openid) {
  return network.get(commonApi.openIdLogin, { openid }).then(res => {
    saveUserInfo(res)
    return res
  })
}

/* **************************** 登录注册相关 *******************************/
// 验证码静默注册登陆
export function msgSilentLogin (params) {
  return network.post(commonApi.msgSilentLogin, params).then(res => {
    saveUserInfo(res)
    return res
  })
}

export function msgSilentLogin2 (params) {
  return network.get(commonApi.msgSilentLogin2, params).then(res => {
    res.model = {}
    res.model.id = res.datas.id
    res.model.idNo = res.datas.relationId
    res.model.loginTime = res.datas.lastloginTime
    res.model.loginToken = res.datas.token
    res.model.mobile = res.datas.phoneNumber
    res.model.name = res.datas.name
    res.model.openId = res.datas.openid
    res.model.registerTime = res.datas.registerTime
    saveUserInfo(res)
    return res
  })
}

/* **************************** 注册相关 *******************************/
// 注册账号
export function regist (params) {
  return network.post(`${commonApi.regist}?${util.objectToQuery(params)}`, params).then(res => {
    return res
  })
}

/* **************************** 验证码获取相关 *******************************/

// 发送短信验证码
export function sendSMSChkCode (mobile) {
  return network.get(commonApi.sendMsgCode, { mobile }).then(res => {
    return res
  })
}
// 发送语音验证码
export function audioChkSend (mobile) {
  return network.post(commonApi.audioChkSend, { mobile }).then(res => {
    return res
  })
}

/* **************************** 微信相关 *******************************/
// 绑定微信
export function bindWx (params) {
  return network.get(commonApi.bindWx, params).then(res => {
    return res
  })
}

// 获取微信公众号签名信息
export function getWxSignatureData (url) {
  return network.get(commonApi.getWxSignature, { url }, { hideLoading: true })
}

/* **************************** 其他 *******************************/

// 重置密码
export function resetPwd (params) {
  return network.post(`${commonApi.resetPwd}?${util.objectToQuery(params)}`, params).then(res => {
    return res
  })
}
// 实名
export function union2 (params) {
  return network.post(commonApi.union2, params).then(res => {
    return res
  })
}

// login_token查询用户登录信息
export function getUserInfo (token) {
  network.setHeaderAuth(token)
  return network.get(commonApi.getUserInfo, {}
    , { hideLoading: true }
  ).then(res => {
    let _datas = res.datas || {}
    let _res = {
      code: res.code,
      success: res.success,
      message: res.message,
      model: {
        id: _datas.id,
        idNo: _datas.relationId,
        loginTime: _datas.lastloginTime,
        loginToken: _datas.token,
        mobile: _datas.phoneNumber,
        name: _datas.name,
        openId: _datas.openid,
        registerTime: _datas.registerTime
      }
    }
    saveUserInfo(_res)
    return _res
  })
}
/* ****************************** private *******************************/
// 保存登录信息，设置请求头
function saveUserInfo (res, notSend) {
  if (res.success) {
    network.setHeaderAuth(res.model.loginToken)
    Vue.prototype.$userInfo = res.model
  }

  let params = {
    'mobile': res.model.mobile,
    'loginToken': res.model.loginToken,
    'sessionId': res.model.sessionId,
    'openId': res.model.openId
  }
  util.session.setItem('userCenterData', params)

  if (notSend) {
    return
  }

  // 发送用户信息
  return setUserContext(params).then(response => {
    return response
  })
}
