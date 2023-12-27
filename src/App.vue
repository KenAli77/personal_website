<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import {onMounted, onUnmounted, ref} from "vue";

const navbarRef = ref<HTMLElement>();
const scrolled = ref(false);


// Add the handleScroll method
const handleScroll = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const threshold = 100; // Adjust the threshold as needed
  scrolled.value = scrollPosition > threshold;
  console.log("scrolling")
};

// Attach the scroll event listener
onMounted(() => {
  console.log(navbarRef.value)
  window.addEventListener('scroll', handleScroll);
});

// Remove the scroll event listener on component destroy
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>
<template>
  <nav-bar :scrolled="scrolled" ref="navbarRef" class="navigation"></nav-bar>

  <v-container fluid class="pa-0 ma-0">
    <div class="container">
      <home-component id="home"></home-component>

      <about-view id="about"></about-view>
      <v-container fluid>
        <projects-component id="projects"></projects-component>
      </v-container>
      <v-container fluid>
        <contact-component id="contact"></contact-component>
      </v-container>

    </div>
  </v-container>
</template>
<style scoped>

.container {
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
}

</style>
