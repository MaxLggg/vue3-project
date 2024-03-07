import type { RouteParamsRaw } from 'vue-router'

const staticRoutes: RouteParamsRaw[] = [
  {
    path: '/Debounce',
    name: 'Debounce',
    component: () => import('@/views/Debounce/index.vue')
  },
  {
    path: '/Loading',
    name: 'Loading',
    component: () => import('@/views/Loading/index.vue')
  },
  {
    path: "QuilEditor",
    name: "QuilEditor",
    component: () => import('@/views/QuilEditor/index.vue')
  }
]

export default staticRoutes