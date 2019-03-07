// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  },
  getters: {
    saleProducts: (state) => {
      let saleProducts = state.products.map(product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts
    }
  },
  mutations: {
    minusPrice (state, payload) {
      let newPrice = state.products.forEach(product => {
        product.price -= payload
      })
      return newPrice
    }
  },
  actions: {
    minusPriceAsync (context, payload) {
      return setTimeout(() => {
        context.commit('minusPrice', payload)
      }, 2000)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // render: h => h(App),
  components: { App },
  template: '<App/>'
})
