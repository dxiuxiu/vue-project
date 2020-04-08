<template>
  <ul class="city-list-container">
    <li class="city-item" @click="clickHandle('上海')">上海</li>
    <li class="city-item" @click="clickHandle('北京')">北京</li>
    <li class="city-item" @click="clickHandle('杭州')">杭州</li>
    <li class="city-item" @click="clickHandle('无锡')">无锡</li>

    <li class="city-item" @click="clickHandle('广州')">广州</li>
    <li class="city-item" @click="clickHandle('西安')">西安</li>
    <li class="city-item" @click="clickHandle('江苏')">江苏</li>
    <li class="city-item" @click="clickHandle('浙江')">浙江</li>

    <li class="city-item" @click="clickHandle('湖南')">湖南</li>
    <li class="city-item" @click="clickHandle('湖北')">湖北</li>
    <li class="city-item" @click="clickHandle('江西')">江西</li>
    <li class="city-item" @click="clickHandle('汉中')">汉中</li>

    <li class="city-item" @click="clickHandle('榆林')">榆林</li>
    <li class="city-item" @click="clickHandle('测试')">---</li>
    <li class="city-item" @click="clickHandle('测试')">---</li>
    <li class="city-item" @click="clickHandle('测试')">---</li>
  </ul>
</template>
<script>
export default {
  name: "CityList",
  props: {
    cityChange: {
      type: Function,
      default:null
    }
  },
  methods: {
    /** 这里写箭头函数 this 是会报错滴 */
    clickHandle: function (cityName) {
      if (!this.cityChange) {
        return;
      }
      this.cityChange(cityName);
    }
    // clickHandle: (cityName) => {
    //   if (!this.cityChange) {
    //     return;
    //   }
    //   this.cityChange(cityName);
    // }
  },
  data() {
    return {};
  },
  activated() {}
};
</script>

<style scoped>
/* css */
.city-list-container {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(4, 40px);
  padding: 15px 10px;
}
.city-item {
  list-style: none;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #f1f1f1;
  line-height: 40px;
}
</style>