import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "@fontsource-variable/rubik";
import "@fontsource-variable/montserrat";
import "@fortawesome/fontawesome-free/css/all.css";
import { fa } from "vuetify/iconsets/fa";
import "./assets/main.css";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",
        text: "#292929",
      },
    },
  },
  icons: {
    defaultSet: "mdi",
  },
  components,
  directives,
});
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(vuetify).mount("#app");
