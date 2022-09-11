import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Shop from '@/components/Layout/Shop.vue'
import  ShoppingCarts  from '@/components/ShoppingCarts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')  
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/components/Layout/Shop.vue')  
    },
    {
      path: '/ShoppingCarts',
      name: 'ShoppingCarts',
      component: () => import('@/components/ShoppingCarts.vue')  
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: () => import('@/components/Authorization.vue')  
    },

  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(()=> resolve({top:0, behavior: 'smooth'}), 300)
    })
    
  },

})


export default router
