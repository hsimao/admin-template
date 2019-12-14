import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/adminData',
    component: Layout,
    redirect: '/adminData/today',
    name: 'AdminData',
    meta: { title: '商戶後台統計', icon: 'chart' },
    children: [
      {
        path: 'today',
        name: 'AdminDataToday',
        component: () => import('@/views/demo/complex-table'),
        meta: { title: '當日跑量統計' }
      },
      {
        path: 'history',
        name: 'AdminDataHistory',
        component: () => import('@/views/demo/complex-table'),
        meta: { title: '歷史跑量統計' }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Order',
        component: () => import('@/views/demo/complex-table'),
        meta: { title: '商戶訂單列表', icon: 'form' }
      }
    ]
  },
  {
    path: '/withdrawal',
    component: Layout,
    redirect: '/withdrawal/manage',
    name: 'Withdrawal',
    meta: { title: '商戶提現管理', icon: 'example' },
    children: [
      {
        path: 'manage',
        name: 'WithdrawalManage',
        component: () => import('@/views/demo/base-table'),
        meta: { title: '提現管理' }
      },
      {
        path: 'list',
        name: 'WithdrawalList',
        component: () => import('@/views/demo/complex-table'),
        meta: { title: '提現統計' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '表單 Demo', icon: 'form' }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
