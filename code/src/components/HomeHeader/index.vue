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
      <Search/>
    </div>
  </div>
</template>

<script>
import Search from '../Search/index.vue'
export default {
  name: "HomeHeader",
  components: {
    Search
  }
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