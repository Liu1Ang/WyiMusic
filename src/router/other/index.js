export default [
  {
    path: '/404',
    name: 'error-404',
    component: () => import('@/components/error/404.vue')
  },
  {
    path: '/500',
    name: 'error-500',
    component: () => import('@/components/error/500.vue')
  },
  {
    path: '/400',
    name: 'error-400',
    component: () => import('@/components/error/400.vue')
  },
  {
    path: '/401',
    name: 'error-401',
    component: () => import('@/components/error/401.vue')
  },
  {
    path: '/403',
    name: 'error-403',
    component: () => import('@/components/error/403.vue')
  },
  {
    path: '/405',
    name: 'error-405',
    component: () => import('@/components/error/405.vue')
  },
  {
    path: '/503',
    name: 'error-503',
    component: () => import('@/components/error/503.vue')
  },
  {
    path: '/505',
    name: 'error-505',
    component: () => import('@/components/error/505.vue')
  },
  {
    path: '*',
    name: 'error-404',
    component: () => import('@/components/error/404.vue')
  }
]
