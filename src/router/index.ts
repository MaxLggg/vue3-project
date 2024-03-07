import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
const staticRoutes = import.meta.glob('./modules/*.ts', { eager: true, import: 'default' })

const routeArray: RouteRecordRaw[] = []
Object.keys(staticRoutes).forEach((path: any) => {
  Object.keys(staticRoutes[path]).forEach((key) => {
    routeArray.push(staticRoutes[path][key])
  })
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('@/views/Home/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
