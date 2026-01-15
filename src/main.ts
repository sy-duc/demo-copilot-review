import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

// Bắt lỗi toàn cục
app.config.errorHandler = (err, vm, info) => {
  console.error('Unhandled Error:', err)
  console.error('Vue component:', vm) // Component bị lỗi
  console.error('Additional info:', info) // Thông tin lỗi

  router.push(`/error?code=500`)
}

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
