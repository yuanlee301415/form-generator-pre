import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const routes = [
  { // Home
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        name: 'Home',
        meta: {
          title: 'Home'
        },
        component: () => import('@/views/home')
      }
    ]
  },

  { // Form
    path: '/form',
    component: Layout,
    redirect: '/form/',
    children: [
      {
        path: 'add',
        name: 'FormAdd',
        meta: {
          title: '新增表单'
        },
        component: () => import('@/views/form/add')
      },

      {
        path: 'edit',
        name: 'FormEdit',
        meta: {
          title: '编辑表单'
        },
        component: () => import('@/views/form/edit')
      }
    ]
  }
]

export default new Router({
  routes
})
