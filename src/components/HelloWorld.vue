<template>
  <div>
    <!-- <productOne v-bind:products="products"></productOne>
    <productTwo v-bind:products="products"></productTwo> -->
    <productOne></productOne>
    <productTwo></productTwo>
  </div>
</template>

<script>
import One from '../views/productListOne'
import Two from '../views/productListTwo'

export default {
  name: 'HelloWorld',
  components: {
    'productOne': One,
    'productTwo': Two
  },
  data () {
    return {
      // products: [
      //   {name: '鼠标', price: 20},
      //   {name: '键盘', price: 40},
      //   {name: '耳机', price: 60},
      //   {name: '显示屏', price: 80}
      // ]
    }
  }
}
</script>

<style scoped>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
