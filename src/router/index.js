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
    path: '/forms',
    name: 'forms',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/datepickers',
    name:'datepickers',
    component: ()=> import('../views/DataPickerView.vue')
  },
  {
    path: '/vuex',
    name:'vuex',
    component: ()=> import('../views/VuexView.vue')
  },
  {
    path: '/iview',
    name:'iview',
    component: ()=> import('../views/iView.vue')
  },
  {
    path: '/todolist1',
    name:'todolist1',
    component: ()=> import('../views/TodoListView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
