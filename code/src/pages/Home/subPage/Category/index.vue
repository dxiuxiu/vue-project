<template>
  <div>datas {{datas.length}}</div>
</template>
<script>
import { getCategory } from "../../../../api/home.js";
export default {
   name:"Category",
  data() {
    return {
      datas: []
    };
  },
  methods: {},
  mounted() {
    getCategory().then(
      resDatas => {
        this.datas = resDatas
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