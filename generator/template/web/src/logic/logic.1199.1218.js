/**
 * 用户中心逻辑
 * 第一次更新2019.10.12
 * 需求描述：http://rd-jiradev.hanhua.com/jira/browse/TONG-1218
 * 1、Vue实例初始化成功，获取URL上的openid 传入/api/user/context中
 * 2、登录后将"mobile": "18840677941" , "loginToken": "1111111", "sessionId": "aaaaaaaaa", "openId": "bbbbbbbbbb" 传入/api/user/context中
 *    2.1 所有登录接口登录成功之后均需要调用，统一在common-service.js中实现，不在现有业务中写具体实现，调用本文件中的方法即可
 *    2.3 上述4个字段，有值即传值，无值则传空
 * 3、调用/api/user/context时，将相关参数以'userCenterData'为key，存入storage中
 */
import network from '../api/network'
import comApi from '../api/common-api'

export function setUserContext (params) {
  return network.post(comApi.userContext, params).then(res => {
    return res
  })
}
