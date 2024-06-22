// import { RouteParamsRaw } from 'vue-router'

const staticRoutes = [
  {
    path: '/Debounce',
    name: 'Debounce',
    component: () => import('@/views/Debounce/index.vue'),
    meta: {
      title: '防抖'
    }
  },
  {
    path: '/Loading',
    name: 'Loading',
    component: () => import('@/views/Loading/index.vue'),
    meta: {
      title: '加载组件'
    }
  },
  {
    path: '/QuilEditor',
    name: 'QuilEditor',
    component: () => import('@/views/QuilEditor/index.vue'),
    meta: {
      title: '富文本编辑器'
    }
  },
  {
    path: '/taskSlice',
    name: 'taskSlice',
    component: () => import('@/views/taskSlice/index.vue'),
    meta: {
      title: '任务分片'
    }
  },
  {
    path: '/biBao',
    name: 'biBao',
    component: () => import('@/views/biBao/index.vue'),
    meta: {
      title: '闭包'
    }
  },
  {
    path: '/proptotype',
    name: 'proptotype',
    component: () => import('@/views/proptotype/index.vue'),
    meta: {
      title: '原型链'
    }
  }
]

export default staticRoutes
