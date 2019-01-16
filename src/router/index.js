import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Near from '@/page/Near'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/near',
      name: 'Near',
      component: Near
    }
  ]
})
