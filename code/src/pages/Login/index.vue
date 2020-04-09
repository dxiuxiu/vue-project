<template>
  <div>
    <!-- 给 prop 传入一个静态的值 -->
    <Header title="登录" backRouter="/" />
    <LoginCom :loginHandle="loginHandle" />
    <!-- 动态赋予一个变量的值 -->
    <!-- <Header :title="登录" /> -->
  </div>
</template>
<script>
import Header from "../../components/Header";
import LoginCom from "../../components/Login";
import { mapActions } from "vuex";
import router from "../../router/index.js";
export default {
  name: "Login",
  // props: {
  //   routerProps
  // },
  components: {
    Header,
    LoginCom
  },
  methods: {
    ...mapActions(["update"]),
    loginHandle(data) {
      const { userInfo } = this.$store.state;
      userInfo.userName = data.userName;
      /**
       * @TODO
       * 调用登录接口,登录成功后修改 store
       */
      this.update(userInfo);
      if (this.$store.state.userInfo.userName) {
        // const routerProps = this.$route.params.routerProps;
        // console.log(routerProps)
        // if (routerProps) {
        //   router.push(`/${routerProps}`); // 跳转到来源页面
        // } else {
        //   // router.push(`/user`); // 跳转到默认页面
        // }
        router.push(`/user`); // 跳转到默认页面
      }
    }
  },
  data() {
    return {};
  },
  activated() {}
};
</script>

<style scoped>
/* css */
</style>