<template>
  <div>

    <!-- 给 prop 传入一个静态的值 -->
    <Header title="登录" backRouter="/"/>
    <LoginCom/>
    <!-- 动态赋予一个变量的值 -->
    <!-- <Header :title="登录" /> -->
  </div>
</template>
<script>
import Header from "../../components/Header";
import LoginCom from "../../components/Login"
export default {
  name: "Login",
  components: {
      Header,
      LoginCom
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