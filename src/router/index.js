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
    meta: { title: 'My Customers', hideFab: true },
  },
  {
    path: '/overview',
    name: 'overview',
    component: () => import('@/views/OverviewView.vue'),
    meta: { title: 'Overview', hideFab: true },
  },
  {
    path: '/insights',
    name: 'insights',
    component: () => import('@/views/InsightsView.vue'),
    meta: {
      title: 'Insights',
      searchPlaceholder: 'Search insights…',
      hideFab: true,
    },
  },
  {
    path: '/campaigns',
    name: 'campaigns',
    component: () => import('@/views/CampaignsView.vue'),
    meta: { title: 'Campaigns', hideFab: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
