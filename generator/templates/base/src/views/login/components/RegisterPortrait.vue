<!-- 身份识别头像 -->
<template>
  <div class="content"> 
    <!-- <van-cell-group>
      <van-field
        v-model="phoneNumber"
        clearable
        label="手机号"
        placeholder="请输入11位手机号"
        ref="phoneField"
      />

      <van-field v-model="verifyCode" label="验证码" placeholder="请输入短信验证码" ref="codeField">
        <a v-show="sendVerifyCode" class="verify-btn" slot="button" @click="getCode">获取验证码</a>
        <a v-show="!sendVerifyCode" class="verify-btn verified-btn" slot="button">{{seconds}} 秒后重新发送</a>
      </van-field>
    </van-cell-group> -->
  </div>
</template> 
<script> 
// import utils from "../../assets/js/common.js";

export default { 
  components: { 
  },
  created() { 
  },
  data() {
    //这里存放数据
    return {
      phoneNumber: "",
      verifyCode: "",
      checked: false,
      sendVerifyCode: true,
      seconds: 0
    };
  },
  methods: {
    // getCode() {
    //   this.$refs.phoneField.blur();
    //   this.$refs.codeField.blur();
    //   if (!utils.isPhoneNo(this.phoneNumber)) {
    //     this.$dialog.alert({
    //       title: "信息错误",
    //       message: "请输入正确的手机号",
    //       confirmButtonText: "知道了"
    //     });
    //     return;
    //   }
    //   this.sendVerifyCode = false;
    //   this.seconds = 60;
    //   var timer = setInterval(() => {
    //     this.seconds--;
    //     if (this.seconds <= 0) {
    //       this.sendVerifyCode = true;
    //       clearInterval(timer);
    //     }
    //   }, 1000);
    //   this.$once("hook:beforeDestroy", () => {
    //     clearInterval(timer);
    //   });
    //   this.$emit("getVerifyCode");
    // }
  }
};
</script>
<style lang='less'>
//@import url(); 引入公共css类
.content {
  position: relative;
}

.verify-btn {
  position: absolute;
  right: 0;
  top: -15px;
  height: 54px;
  line-height: 54px;
  padding-left: 15px;
  color: #0076ff;
  border-left: 1px solid #e4e4e4;
}
// .verified-btn {
//   color: #a9a9a9;
// }
// .van-field__button {
//   background-color: aqua;
// }
</style>