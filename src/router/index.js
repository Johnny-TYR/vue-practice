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
    name: 'datepickers',
    component: () => import('../views/DataPickerView.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../views/VuexView.vue')
  },
  {
    path: '/example',
    name: 'example',
    component: () => import('../views/Example.vue')
  },
  {
    path: '/todolist1',
    name: 'todolist1',
    component: () => import('../views/TodoListView.vue')
  },
  {
    path: '/timer',
    name: 'timer',
    component: () => import('../views/TimerView.vue')
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: () => import('@/views/CarouselView.vue')
  },
  {
    path: '/transitions',
    name: 'transitions',
    component: () => import('@/views/TransitionsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
