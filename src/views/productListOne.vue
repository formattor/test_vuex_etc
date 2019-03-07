<template>
    <div id="product-list-one">
        <h2>product list one</h2>
        <ul>
            <li v-for="(item,index) in products" :key="index">
                <span>{{item.name}}</span>
                <span class="price">${{item.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
//   props: ['products'],
  data () {
    return {
    //   products: this.$store.state.products
      products: this.$store.getters.saleProducts
    }
  }
}
</script>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2); /*阴影长，阴影宽，阴影模糊，阴影颜色 */
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
