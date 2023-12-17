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
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";

import { fa } from "vuetify/iconsets/fa";
import "./assets/main.css";

// library.add(solidIcons);
// library.add(brandIcons);
// library.add(regularIcons);

const vuetify = createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",
        text: "black",
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
