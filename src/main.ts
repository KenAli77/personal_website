import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { fa } from "vuetify/iconsets/fa";

const vuetify = createVuetify({
    theme: {
        defaultTheme: "light",
      },
      icons: {
        defaultSet: "mdi",
      },
    components,
    directives,
  })
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(vuetify).mount('#app')
