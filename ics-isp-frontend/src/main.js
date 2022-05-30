import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VCalendar from 'v-calendar';

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VCalendar, {})
  .mount('#app')
  
