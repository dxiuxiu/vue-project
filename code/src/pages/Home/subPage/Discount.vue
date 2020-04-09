<template>
  <div>
    Discount
  </div>
</template>
<script>
import { getCategory } from "../../../api/home.js";
export default {
  name: "Discount",
  components: {
  },
  data() {
    return {
      datas: []
    };
  },
  methods: {},
  mounted() {
    getCategory().then(
      resDatas => {
        this.datas = resDatas;
      },
      err => {
        console.error(err);
      }
    );
  }
};
</script>

<style scoped>
/* css */
</style>