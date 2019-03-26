/*
  模板默认网络模块，网络请求服务管理文件
  新增服务请遵循格式进行增删
  add by zxy at 2019-03-14 17:19:18
*/
import api from './api';
import network from './network'; 


// 验证码登录
export function msgLoginService (mobile, chkId, chkCode) {
  // moblie = parseInt(moblie)
  return network
    .get (api.msgLogin, {
      mobile,
      chkId,
      chkCode,
    })
    .then (function (res) {
      return res;
    });
}
// 获取验证码
export function getVerifyCode (phoneNumber) {
  var time = new Date ().getTime ().toString ();
  return network
    .get (
      api.getVerifyCode,
      {
        appUserId: 'HHT',
        sourceInvokeId: time,
        phoneNumber,
      },
      true
    )
    .then (function (res) {
      return res;
    });
}

//视频上传
export function videoToUpload (video) {
  return network.post (api.uploadVideo, video).then (function (res) {
    return res;
  });
}
//视频任务完成
export function videoTaskToSuccess (docId, filename, id) {
  let params = {
    docId: docId,
    fileName: filename,
    id: id,
  };
  return network
    .post (api.noticUploadVideoSuccess, params) 
}
// 获取微信公众号签名信息
export function getWxSignatureData (url) {
    return network
      .get (api.getWxSignature, {url}, true) 
  }
  