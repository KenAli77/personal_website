<template>
    <v-toolbar extented flat style="background-color: transparent">
        <v-row class="px-5" justify="center">
            <v-col justify="center">
                <div class="logocontainer">
                    <span class="logo">{k}</span>
                    <span class="logotext align-bottom mt-3 ms-1">digital</span>

                </div>
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

.logocontainer {
    border: blue, solid, 10px;

}

.logo {
    background-color: blue;
    border-radius: 0;
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
