<template>
  <div class>User</div>
</template>

<script>
import router from '../../router'
export default {
  name: "User",
  mounted() {
    const { userInfo } = this.$store.state;
    if (!userInfo.userName) {
      router.push(`/login`);
    }
  }
};
</script>

<style scoped>
</style>
