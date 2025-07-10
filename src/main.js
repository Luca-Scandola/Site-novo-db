import { createApp } from 'vue'
import App           from './App.vue'
import router        from './router'
import axios         from 'axios'
import '@/assets/styles.css'

const PROD_API = 'http://localhost:3000'

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? PROD_API
    : 'http://localhost:3000'

console.log('API baseURL:', axios.defaults.baseURL)

const app = createApp(App)
app.use(router)
app.mount('#app')