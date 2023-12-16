<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
</script>
<template>
  <container class="pa-0 ma-0">
    <nav-bar></nav-bar>
    <RouterView></RouterView>

    </container>
</template>
<style scoped>
 
</style>
