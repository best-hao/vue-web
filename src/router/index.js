import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Near from '@/page/Near'
import Fabu from '@/page/Fabu'
import UserCenter from '@/page/UserCenter'
import Task from '@/page/Task'
import Detail from '@/page/Detail'
import BindPhone from '@/page/bindPhone'
import Collect from '@/page/Collect'
import Like from '@/page/Like'
import Pay from '@/page/Pay'
import Order from '@/page/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
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
    },
    {
    	path:'/fabu',
    	name:'Fabu',
    	component:Fabu
    },
    {
      path: '/user',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    },
    {
    	path: '/detail',
    	name: 'detail',
    	component: Detail
    },
    {
    	path: '/bind',
    	name: 'bind',
    	component: BindPhone
    },
    {
    	path: '/collect',
    	name:'collect',
    	component:Collect
    },
    {
    	path: '/like',
    	name:'like',
    	component:Like
    },
    {
    	path: '/pay',
    	name:'pay',
    	component:Pay
    },
    {
    	path: '/order',
    	name:'order',
    	component:Order
    }
  ]
})
