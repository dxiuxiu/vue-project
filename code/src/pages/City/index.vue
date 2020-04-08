<template>
  <div class="city-container">
    <Header title="选择城市" />
    <CurrentCity :cityName="userInfo.cityName" />
    <CityList :cityChange="cityChange" />
  </div>
</template>
<script>
import Header from "../../components/Header";
import CurrentCity from "../../components/CurentCity";
import CityList from "../../components/CityList";

// import {mapMutations} from "vuex"
import { mapActions } from "vuex";

export default {
  name: "City",
  components: {
    Header,
    CurrentCity,
    CityList
  },
  methods: {
    // ...mapMutations(["update"]),
    ...mapActions(["update"]),

    cityChange: function(data) {
      this.update({ cityName: data });
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