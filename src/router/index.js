import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Near from '@/page/Near'
import Fabu from '@/page/Fabu'
import UserCenter from '@/page/UserCenter'
import Task from '@/page/Task'
import Detail from '@/page/Detail'

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
    	name: 'Detail',
    	component: Detail
    }
  ]
})
