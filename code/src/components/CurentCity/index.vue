<template>
  <!-- <div class="currentCity" v-text="cityName"></div> -->
  <div class="currentCity">
      {{cityName}}
  </div>
</template>
<script>
export default {
  name: "CurrentCity",
  props: {
    cityName: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
/* css */
.currentCity {
  background-color: #fff;
  padding: 30px 0px;
  text-align: center;
  font-size: 14px;
  border-bottom: 1px solid #f1f1f1;
}
</style>