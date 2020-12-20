import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import datav from './datav-libs'

createApp(App)
  .use(datav)
  .use(store)
  .use(router)
  .mount('#app')
