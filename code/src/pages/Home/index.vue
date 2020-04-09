<template>
  <div class=''>
    <HomeHeader/>
    <Category/>
  </div>
</template>

<script>
import HomeHeader from '../../components/HomeHeader'
import Category from './subPage/Category'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Category
  }
}
</script>

<style scoped>

</style>
