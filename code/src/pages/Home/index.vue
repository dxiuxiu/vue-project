<template>
  <div class=''>
    <HomeHeader/>
    <Discount/>
  </div>
</template>

<script>
import HomeHeader from '../../components/HomeHeader'
import Discount from './subPage/Discount'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Discount
  }
}
</script>

<style scoped>

</style>
