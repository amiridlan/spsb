import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Global error handler
app.config.errorHandler = (err: unknown, instance, info: string) => {
  console.error('Global error:', err)
  console.error('Error info:', info)
}

createApp(App).mount('#app')
