import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/BuildView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')  
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: () => import('@/components/AboutUs.vue')  
    },
    {
        path: '/build',
        name: 'constructor',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/BuildView.vue')  
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(()=> resolve({top:0, behavior: 'smooth'}), 300)
    })
    
  },

})


export default router
