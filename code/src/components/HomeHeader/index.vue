<template>
  <div class="home-header-container clear-fix">
    <div class="home-header-left float-left">
      <router-link to="/city">
        <span>cityName</span>
        &nbsp;
        <i class="icon-angle-down"></i>
      </router-link>
    </div>
    <div class="home-header-right float-right">
      <router-link to="/user">
        <i class="icon-user"></i>
      </router-link>
    </div>

    <div class="home-header-middle">
      <input placeholder="请输入关键字" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style scope>
.home-header-container {
  padding: 10px;
  background-color: red;
}
.home-header-left {
  width: 100px;
  line-height: 39px;
}
.home-header-middle {
  margin: 0px 40px 0px 100px;
  background-color: #fff;
  border-radius: 5px;
}
input {
  border: none;
  padding: 10px;
  font-size: 14px !important;
}

.home-header-right {
  width: 30px;
  line-height: 39px;
}
a,
i {
  color: #fff;
}

.float-left {
  float: left;
}
.float-right {
  float: right;
}
.clear-fix:after {
  display: table;
  content: "";
  clear: both;
}
</style>