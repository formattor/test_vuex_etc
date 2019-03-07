import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {
      path: '/vuex',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
