import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=> import('@/pages/home')
const My = ()=> import('@/pages/my')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },{
      path:'/home',
      component:Home
    },{
      path:'/my',
      component:My
    }
  ]
})
