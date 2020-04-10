<template>
  <div class=''>
    <HomeHeader/>
    <Category/>
    <Discount/>
  </div>
</template>

<script>
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Discount from './subPage/Discount'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Discount,
    Category
  }
}
</script>

<style scoped>

</style>
