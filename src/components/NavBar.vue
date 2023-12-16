<template>
    <v-toolbar extented flat>
        <v-btn to="/" variant="plain">Home</v-btn>
        <v-btn to="/about" variant="plain">About</v-btn>
        <v-btn to="/contact" variant="plain">Contact</v-btn>
    </v-toolbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const drawer = ref(false);
</script>

<style scoped>

</style>
