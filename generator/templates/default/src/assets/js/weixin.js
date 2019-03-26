import { getWxSignatureData } from 'api/service';
import wx from 'weixin-js-sdk';

export default {
  wxConfig(url) {
    getWxSignatureData (url)
    .then (function (result) { 
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: result.appid, // 必填，公众号的唯一标识
        timestamp: result.timestamp, // 必填，生成签名的时间戳
        nonceStr: result.nonceStr, // 必填，生成签名的随机串
        signature: result.signature, // 必填，签名
        jsApiList: [
          "updateAppMessageShareData",
          "onMenuShareAppMessage",
          "onMenuShareTimeline",
          "updateTimelineShareData"
        ] 
      });  
    });
  },
  wxReady(title, link, imgUrl) {
    // 准备分享内容
    let data = {
        link,
        title,
        imgUrl,
        success: function success(res) {
          console.log("已分享");
        },
        cancel: function cancel(res) {
          console.log("已取消");
        },
        fail: function fail(res) {
          console.log("分享失败");
        }
      };
      wx.ready(function() {
        //判断当前客户端版本是否支持指定JS接口
        wx.checkJsApi({
          jsApiList: [
            // 所有要调用的 API 都要加到这个列表中
            "onMenuShareAppMessage",
            "updateAppMessageShareData",
            "onMenuShareTimeline",
            "updateTimelineShareData"
          ], // 需要检测的JS接口列表，所有JS接口列表见附录2,
          success: function(res) {
            console.log("支持");
          }
        });
        wx.updateAppMessageShareData(data);
        wx.updateTimelineShareData(data);
      });
  }
};
