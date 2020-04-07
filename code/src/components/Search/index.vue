<template>
  <div class="search-container">
    <i class="icon-search"></i>
    <input placeholder="请输入关键字" />
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style scope>
.search-container {
  background-color: #fff;
  padding: 3px;
  border-radius: 5px;
}
input {
  border: none;
  outline: none;
  padding: 10px 5px;
  font-size: 14px !important;
  font-weight: normal;
}
.icon-search {
  margin-left: 10px;
  color: #ccc !important;
}
</style>