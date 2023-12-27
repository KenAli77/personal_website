<template>
  <v-toolbar :class="{ 'scrolled': scrolled, 'navbar': true }" extented style="background-color: transparent;  font-family: 'Rubik Variable', sans-serif;
">
    <div class="container">
      <img class="logo" src="/src/assets/k-digital_logo_full.svg" alt="logo" />

      <div class="nav">
        <button type="button" @click="scrollToSection('home')">Home
        </button>
        <button type="button" @click="scrollToSection('about')">About
        </button>
        <button type="button" @click="scrollToSection('projects')">Case
          Studies
        </button>
        <button type="button" @click="scrollToSection('contact')">Contact
        </button>

      </div>

    </div>

    <!-- <v-col>
        <v-btn>
            <v-icon>mdi-flag-english</v-icon>
        </v-btn>
        <v-btn>
            <v-icon>mdi-flag-german</v-icon>
        </v-btn>
        <v-btn>
            <v-icon>mdi-flag-spanish</v-icon>
        </v-btn>
        <v-btn>
            <v-icon>mdi-flag-italian</v-icon>
        </v-btn>
    </v-col> -->

  </v-toolbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import router from "@/router";

const drawer = ref(false);
const props = defineProps({
  scrolled: Boolean,
});

function scrollToSection(sectionId: string) {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  }
}

</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
}

.navbar {
  position: fixed;
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.navbar.scrolled {
  background-color: rgba(221,239,187, 0.95) !important;
}

.logo {
  width: 100px;
  object-fit: contain;
}


.container {
  padding: 2%;
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
}


button {
  font-size: 1rem;
  color: #292929;
  font-weight: normal;
  font-family: 'Sora', sans-serif;
}

.v-btn.selected {
  /*color: #FB5607;*/
}
</style>
