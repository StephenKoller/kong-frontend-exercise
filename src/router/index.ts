import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PageHome.vue'),
    },
    {
      path: '/services/:id',
      name: 'service details',
      component: () => import('../views/PageServiceDetails.vue'),
    },
  ],
})

// redirect user to home page if they try to access a route that is not allowed
router.beforeEach((to) => {
  const allowedRoutes = ['home', 'service details']
  if (allowedRoutes.includes(to.name as string)) {
    return true
  } else {
    return { name: 'home', params: {} }
  }
})

export default router
