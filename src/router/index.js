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
    name: 'CustomForm',
    meta: {
      title: '表单'
    },
    component: Layout,
    redirect: '/form/add',
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
      },

      {
        path: 'view',
        name: 'FormView',
        meta: {
          title: '展示表单'
        },
        component: () => import('@/views/form/view')
      }
    ]
  },

  { // 自定义组件
    path: '/custom-components',
    name: 'custom-components',
    meta: {
      title: '自定义组件'
    },
    component: Layout,
    redirect: '/custom-components/description',
    children: [
      {
        path: 'group-title',
        name: 'GroupTitleDemo',
        meta: {
          title: '标题'
        },
        component: () => import('@/views/custom-components/group-title-demo')
      },
      {
        path: 'description',
        name: 'DescriptionDemo',
        meta: {
          title: '描述'
        },
        component: () => import('@/views/custom-components/description-demo.vue')
      },
    ]
  }
]

export default new Router({
  routes
})
