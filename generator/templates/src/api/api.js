/*
  模板默认网络模块，api管理文件
  新增api请遵循格式进行增删
  add by zxy at 2019-03-14 17:19:18
*/
export default {
  // 获取验证码
  getVerifyCode: 'api/sms/sendRandCode',
  // 验证码登录
  msgLogin: '/api/user/login/msg',
  //查询当前任务类型（Face,webank）
  queryTaskType: '/tong2/lite/wz/loadCount',
  //上传视频
  uploadVideo: '/dcloud/api/v1/document/addfile',
  //通知上传视频成功
  noticUploadVideoSuccess: '/tong2/lite/tskjson?url=/auth/lite/task/video',
  // 获取微信签名信息
  getWxSignature: '/tong2/weixin/getSignature'
};
