<template>
  <div>

    <!-- 给 prop 传入一个静态的值 -->
    <Header title="登录" backRouter="/"/>

    <!-- 动态赋予一个变量的值 -->
    <!-- <Header :title="登录" /> -->
  </div>
</template>
<script>
import Header from "../../components/Header";
export default {
  name: "Login",
  components: {
      Header,
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