<template>
  <div class="home-header-container">
    <div class="home-header-left">
      <router-link to="/city">
        <span>cityName</span>
        &nbsp;
        <i class="icon-angle-down"></i>
      </router-link>
    </div>
    <div class="home-header-middle">
      <input placeholder='请输入关键字'/>
    </div>
    <div class="home-header-right">
      <router-link to="/user">
        <i class="icon-user"></i>
      </router-link>
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
  display: flex;
  padding: 10px;
  background-color: red;
}
.home-header-left{
  width: 100px;
  line-height: 39px;
}
.home-header-middle{
  flex: 1;
  background-color: #fff;
  border-radius: 5px;
}
input{
  border: none;
  padding: 10px;
  font-size: 14px!important;
}

.home-header-right{
  width: 30px;
  line-height: 39px;
}
a,i{
  color: #fff;
}

</style>