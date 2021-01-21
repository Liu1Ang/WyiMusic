import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import pageRouter from './page/index'
import otherRouter from './other/index'

Vue.use(Router)

/*
// 当存在多个文件夹的时候可以使用
let routerFiles = require.context('./page', true, /.js$/)
let routerRoutes = []
routerFiles.keys().forEach(element => {
  // 得到里面的每一项
  routerRoutes = routerRoutes.concat(routerFiles(element).default)
}) */
let pageRouters = pageRouter.concat(otherRouter)
const router = new Router({
  // 路由点击时添加的class名
  linkActiveClass: 'active',
  // mode:'history',//去掉url中#/,用于直接访问映射
  // 进入新路由是否滚动到顶部
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/index.vue'),
      children: [...pageRouters]
    }
  ]
})

// 守卫
router.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start()
  // if (to.name !== 'Login') next({ name: 'Login' })
  // else next()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
