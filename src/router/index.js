import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/grid',
    name:'grid',
    component: ()=> import('../views/GridView.vue')
  },
  {
    path: '/vuex',
    name:'vuex',
    component: ()=> import('../views/VuexView.vue')
  },
  {
    path: '/form',
    name:'form',
    component: ()=> import('../views/Form.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
