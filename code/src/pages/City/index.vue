<template>
  <div class="city-container">
    <Header title="选择城市" />
    <CurrentCity :cityName="userInfo.cityName" />
  </div>
</template>
<script>
import Header from "../../components/Header";
import CurrentCity from "../../components/CurentCity";
export default {
  name: "City",
  components: {
    Header,
    CurrentCity
  },
  methods: {
    
  },
  data() {
    return {
      userInfo: this.$store.state.userInfo
    };
  }
};
</script>

<style scoped>
/* css */
.city-container {
}
</style>