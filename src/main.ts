import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Global error handler
app.config.errorHandler = (err: unknown, instance, info: string) => {
  console.error('Global error:', err)
  console.error('Error info:', info)
}

app.use(router)
app.mount('#app')