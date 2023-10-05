import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import store from './store'

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .use(store)
  .use(router)
  .mount('#app')