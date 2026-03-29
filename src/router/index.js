import { createRouter, createWebHistory } from 'vue-router'
import CustomersView from '@/views/CustomersView.vue'

const routes = [
  {
    path: '/',
    redirect: '/customers',
  },
  {
    path: '/customers',
    name: 'customers',
    component: CustomersView,
    meta: { title: 'My Customers' },
  },
  {
    path: '/overview',
    name: 'overview',
    component: () => import('@/views/PlaceholderView.vue'),
    meta: { title: 'Overview' },
  },
  {
    path: '/insights',
    name: 'insights',
    component: () => import('@/views/PlaceholderView.vue'),
    meta: { title: 'Insights' },
  },
  {
    path: '/campaigns',
    name: 'campaigns',
    component: () => import('@/views/PlaceholderView.vue'),
    meta: { title: 'Campaigns' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
