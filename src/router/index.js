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
    meta: { title: 'Mis clientes', hideFab: true },
  },
  {
    path: '/overview',
    name: 'overview',
    component: () => import('@/views/OverviewView.vue'),
    meta: { title: 'Resumen', hideFab: true },
  },
  {
    path: '/insights',
    name: 'insights',
    component: () => import('@/views/InsightsView.vue'),
    meta: {
      title: 'Insights',
      searchPlaceholder: 'Buscar en insights…',
      hideFab: true,
    },
  },
  {
    path: '/campaigns',
    name: 'campaigns',
    component: () => import('@/views/CampaignsView.vue'),
    meta: { title: 'Campañas', hideFab: true },
  },
  {
    path: '/marketing',
    name: 'marketing',
    component: () => import('@/views/MarketingView.vue'),
    meta: { title: 'Vista previa de marketing', hideFab: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
