
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Index from '@/views/Index.vue'
import Profile from '@/views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Kowtsi',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/home',
      name: 'Kowtsi | Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/login',
      name: 'Kowtsi | Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/profile',
      name: 'Kowtsi | Profile',
      component: () => import('../views/Profile.vue')
    }

  ]
})

export default router;
