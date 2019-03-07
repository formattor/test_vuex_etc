<template>
    <div id="product-list-two">
        <h2>product list two</h2>
        <ul>
            <li v-for="(item,index) in products" :key="index">
                <span>{{item.name}}</span>
                <span>${{item.price}}</span>
            </li>
        </ul>
        <button @click="minusPrice">减少价格</button>
        <button @click="minusPriceAsync">异步减少价格</button>
    </div>
</template>

<script>
export default {
//   props: ['products'],
  data () {
    return {
      products: this.$store.state.products
    //   products: this.$store.getters.saleProducts
    }
  },
  methods: {
    minusPrice () {
      this.$store.commit('minusPrice', 2)
    },
    minusPriceAsync () {
      this.$store.dispatch('minusPriceAsync', 5)
    }
  }
}
</script>

<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
#product-list-two button{
    background-color: rgba(255,255,255,0.7);
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    border-style: none;
    border-color: cornflowerblue;
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
