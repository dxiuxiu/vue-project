<template>
  <div >
    <HeaderCom />
    <router-view></router-view>
    <FooterCom />
  </div>
</template>
<script>
import HeaderCom from "../components/Header/index.vue";
import FooterCom from "../components/Footer/index.vue";
export default {
  name: "Home",
  components: {
    HeaderCom,
    FooterCom
  }
};
</script>

<style>

</style>
