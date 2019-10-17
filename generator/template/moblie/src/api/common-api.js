/*
  模板默认网络模块，api管理文件
  新增api请遵循格式进行增删
  add by zxy at 2019-03-14 17:19:18
*/
export default {
  /** ****************** 登录注册用户信息相关模块 ******************/
  // 密码登陆
  // loginPwd: '/api/user/login/pwd',
  loginPwd: '/tong2/tong/login/loginPwd',
  // 验证码静默登录
  msgSilentLogin: '/tong2/tong/login/sreg2',
  // 验证码静默登录(不走瀚华通中台版本)
  msgSilentLogin2: '/api/user/login',

  // 验证码登陆
  msgLogin: '/tong2/tong/login/loginVcodes',
  // openid登陆
  openIdLogin: '/tong2/tong/login/loginByOpenid',
  // 注册
  regist: '/tong2/tong/login/regist',
  // 重置密码
  resetPwd: '/tong2/tong/login/resetPwd',
  // login_token查询用户信息
  getUserInfo: '/api/user/info',
  // 实名
  union2: '/tong2/auth/union2',

  /** ****************** 验证码获取模块 ******************/
  // 发送短信验证码
  sendMsgCode: '/tong2/auth/chkcode',
  // 发送语音验证码
  audioChkSend: '/tong2/msg/audioChkSend',

  /** ****************** 微信相关模块 ******************/
  // 获取微信签名信息
  getWxSignature: '/tong2/weixin/getSignature',
  // 绑定微信
  bindWx: '/tong2/tong/binding/bindwx',

  /** ****************** 用户中心相关模块 ******************/
  userContext: '/api/user/context'

}
