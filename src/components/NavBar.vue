<template>
    <v-toolbar extented flat style="background-color: transparent">
        <v-row class="px-5" justify="center">
            <v-col justify="center">
                <span class="logo">{k}</span>
                <span class="logotext align-bottom mt-3 ms-1">digital</span>
            </v-col>
            <v-col justify="center" class="btn-container">
                <v-btn rounded to="/" variant="plain">Home</v-btn>
                <v-btn rounded to="/about" variant="plain">About</v-btn>
                <v-btn rounded to="" variant="plain">Case Studies</v-btn>
                <v-btn rounded to="/contact" variant="plain">Contact</v-btn>
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
    background-color: #52b69a;
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

.logotext {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.35rem;
    font-style: italic;
    color: #292929;
}
</style>
