<template>
    <v-toolbar extented flat style="background-color: transparent">
        <v-row class="px-5" justify="center">
            <v-col justify="center">
                <span class="logo">{k}</span>
                <span class="logotext align-bottom mt-3 ms-1">digital</span>
            </v-col>
            <v-col justify="center" class="btn-container">
                <v-btn density="default" :ripple="false" rounded to="/" variant="plain"
                    :class="{ 'selected': $route.path === '/' }">Home</v-btn>
                <v-btn density="default" :ripple="false" rounded to="/about" variant="plain"
                    :class="{ 'selected': $route.path === '/about' }">About</v-btn>
                <v-btn density="default" :ripple="false" rounded to="/projects" variant="plain"
                    :class="{ 'selected': $route.path === '/projects' }">Case
                    Studies</v-btn>
                <v-btn density="default" :ripple="false" rounded to="/contact" variant="plain"
                    :class="{ 'selected': $route.path === '/contact' }">Contact</v-btn>
            </v-col>
            <v-col>
            </v-col>

        </v-row>
    </v-toolbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const drawer = ref(false);
</script>

<style scoped>
.btn-container {
    display: flex;
    justify-content: space-evenly;
}

.logo {
    background-color: blue;
    border-radius: 8px;
    height: 40px;
    width: 40px;
    /* Adjust as needed */
    /* Adjust as needed */
    padding: 5px;
    color: white;
    font-weight: bold;
    font-size: 1.3rem;
    font-family: 'Montserrat', sans-serif;
}

.v-btn {
    font-weight: bold;
    font-size: 1rem;
    color: #292929;
}

.v-btn.selected {
    text-decoration: underline;
}

.logotext {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.35rem;
    font-style: italic;
    color: #292929;
}
</style>
