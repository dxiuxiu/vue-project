<template>
  <div class="common-header">
    <span class="back-icon" @click="handleClick">
      <i class="icon-chevron-left"></i>
    </span>

    <h1>{{title}}</h1>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
      default: "title"
    }
  },
  methods: {
    handleClick: () => {
      window.history.back();
      // router.go(-1)
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
/* css */
.common-header {
  display: flex;
  text-align: center;
  padding: 15px 10px;
  color: white;
  background-color: red;
}
.back-icon {
  width: 60px;
  height: 16px;
  cursor: pointer;
  padding: 9px 0px;
}
h1 {
  flex: 1;
  font-size: 16px;
  line-height: 1;
}
</style>