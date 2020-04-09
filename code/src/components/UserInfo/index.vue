<template>
  <div class="userInfo-container">
    <p>
      <i class="icon-user"></i>
      &nbsp;
      {{userInfo.userName}}
    </p>
    <p>
      <i class="icon-map-marker"></i>
      &nbsp;
      {{userInfo.cityName}}
    </p>
  </div>
</template>
<script>
export default {
  name: "UserInfo",
  props: {
    userInfo: {
      type: Object,
      require: true,
      default: function() {
        return {
          userName: "default",
          cityName: "default"
        };
      }
    }
  }
};
</script>

<style scoped>
/* css */
.userInfo-container {
  background-color: #fff;
  padding: 10px;
}
.userInfo-container p {
  line-height: 1.5;
  color: #666;
  text-align: left;
}
.userInfo-container p > i {
  color: #666;
}
</style>