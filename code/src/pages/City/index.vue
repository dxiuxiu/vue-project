<template>
  <div class="city-container">
    <Header title="选择城市" />
    <CurrentCity :cityName="userInfo.cityName" />
    <CityList :cityChange="cityChange"/>
  </div>
</template>
<script>
import Header from "../../components/Header";
import CurrentCity from "../../components/CurentCity";
import CityList from "../../components/CityList"
export default {
  name: "City",
  components: {
    Header,
    CurrentCity,
    CityList
  },
  methods: {
    cityChange:(data) => {
      console.log(data)
    }
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