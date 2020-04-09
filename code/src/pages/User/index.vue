<template>
  <div class>
    <Header title="用户中心" />
    <UserInfo :userInfo = "userInfo" />
  </div>
</template>

<script>
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import router from "../../router";
export default {
  name: "User",
  components: {
    Header,
    UserInfo
  },
  data() {
    return {
      userInfo: this.$store.state.userInfo
    };
  },
  mounted() {
    const { userInfo } = this.$store.state;
    this.userInfo = userInfo
    console.log(this.userInfo)
    if (!userInfo.userName) {
      router.push(`/login`);
    }
  }
};
</script>

<style scoped>
</style>
