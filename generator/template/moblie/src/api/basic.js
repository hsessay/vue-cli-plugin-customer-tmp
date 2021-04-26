import networks from '@htong/net'
// import { xdpartner } from '@api/config.js'
const { sysPoint } = networks

// 发送验证码
export function sendSMSChkCode (param) {
  return sysPoint.tong2(param, { _code: 'send.msgcode' })
}
