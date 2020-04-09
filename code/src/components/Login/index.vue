<template>
  <div class="login-container">
    <div class="input-container phone-container">
      <i class="icon-tablet"></i>
      <input type="text" placeholder="输入手机号"  v-model="phone" />
    </div>
    <div class="input-container password-container clear-fix">
      <i class="icon-key"></i>
      <button>发送验证码</button>
      <input type="text" placeholder="输入验证码" v-model ="phoneCode"/>
    </div>
    <button class="btn-login" @click="clickHandle">登录</button>
  </div>
</template>
<script>
export default {
  name: "Login",
  props: {
    loginHandle: {
      type: Function,
      required: true,
      default:function(data){
        console.error('I am default loginHandle')
        console.log(data)
      }
    }
  },
  methods: {
    clickHandle() {
      const userName = this.phone;
      const phoneCode = this.phoneCode
      if (!userName || !phoneCode) {
        alert('用户名密码不能为空!')
        return;
      }
      if (this.loginHandle) {
        this.loginHandle({
          userName,
          phoneCode
        });
      }
    }
  },
  data () {
    return {
      phone:'',
      phoneCode:''
    }
  }
};
</script>

<style scoped>
/* css */
.login-container {
  width: 300px;
  margin: 160px auto 0 auto;
}
.input-container {
  background-color: #fff;
  border: 1px solid #fff;
  padding: 5px 10px;
  border-radius: 5px;
  overflow: hidden;
}
.input-container input {
  font-size: 16px;
  display: block;
  border: none;
}
.input-container i {
  color: rgb(233, 32, 61);
  width: 16px;
  float: left;
  margin-top: 3px;
}
.phone-container input {
  margin-left: 20px;
}
.password-container {
  margin-top: 10px;
}
.password-container>input {
  margin-left: 20px;
  margin-right: 95px;
  /* 为什么这里不设置宽度时通过 margin-left margin-right 不能达到预期效果呢 */
  width: 165px; 
}
.password-container>button {
  width: 95px;
  height: 100%;
  font-size: 16px;
  color: rgb(233, 32, 61);
  border: 0;
  background-color: #fff;
  text-align: center;
  float: right;
}
.btn-login {
  width: 100%;
  text-align: center;
  background-color: rgb(233, 32, 61);
  color: #fff;
  border: 1px solid rgb(233, 32, 61);
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
  padding: 5px 0;
}
</style>