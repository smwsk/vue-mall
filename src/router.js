import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/home.vue'
import Index from './views/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home',
      children: [
        { path: 'home', component: Home }
      ]
    }
  ]
})
