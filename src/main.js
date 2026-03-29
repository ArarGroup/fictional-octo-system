import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './assets/main.css'
import { initPosthog } from '@/analytics/posthogClient'
import { installRouterAnalytics } from '@/analytics/routerAnalytics'
import { identifySessionUser } from '@/analytics/identity'

initPosthog()
installRouterAnalytics(router)
identifySessionUser()

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
