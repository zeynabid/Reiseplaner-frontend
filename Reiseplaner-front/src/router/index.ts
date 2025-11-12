import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import BuchenView from '@/views/BuchenView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistrierenView from '@/views/RegistrierenView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/buchen',
    name: 'buchen',
    component: BuchenView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registrieren',
    name: 'registrieren',
    component: RegistrierenView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
