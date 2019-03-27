<!-- 登录页面 -->
<template>
  <div>
    <img src="../../assets/images/xd-home-banner.png" width="100%">
    <register-portrait ref="getInput" v-on:getVerifyCode="getVerifyCodeAction"/>
    <div class="xd_btn_t">
      <van-button type="primary" size="normal" @click="login">登录</van-button>
      <div class="xd_fz_12 reg_t">
        没有账号，
        <a href="javascript:;" @click="toRegisterPage">去注册</a>
      </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import RegisterPortrait from "./components/RegisterPortrait"; 
import { getVerifyCode, msgLoginService } from "../../api/service.js";

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    RegisterPortrait 
  },
  data() {
    // 这里存放数据
    return {
      codeId: ""
    };
  },
  created() { 
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    toRegisterPage() {
      this.$router.push({ path: "register" }); // 这里可以配置参数，具体参考官网
    },
    login() {
      var phoneNum = this.$refs.getInput.phoneNumber;
      var verifyCode = this.$refs.getInput.verifyCode;
      var errMsg = "";

      if (verifyCode.length === 0) {
        errMsg = "请输入验证码";
      }

      if (errMsg.length > 0) {
        this.$dialog.alert({
          title: "信息错误",
          message: errMsg,
          confirmButtonText: "知道了"
        });
        return;
      }
      var _this = this;
      msgLoginService(phoneNum, this.codeId, verifyCode)
        .then(function(res) {
          _this.$store.commit("updateUserInfo", res);
          _this.jumpToNextPage();
        }) 
    },

    jumpToNextPage() {
      if (this.$route.query.type === "getCustomer") {
        this.$router.replace({ path: "estimatepre" }); 
      } else {
        this.$router.replace({ path: "minepersonal" });
      }
      console.log(this.$router)
    },

    getVerifyCodeAction() {
      this.phoneNum = this.$refs.getInput.phoneNumber;
      var _this = this;
      getVerifyCode(this.phoneNum)
        .then(function(resp) {
          _this.codeId = resp.sessionId;
        }) 
    }
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.xd_btn_t {
  padding: 50px 10px 0 10px;
  .reg_t {
    line-height: 50px;
    text-align: center;
  }
}

/deep/ .van-cell__value {
  overflow: initial;
}

/deep/ .van-field__label {
  max-width: 60px !important;
}
</style>
