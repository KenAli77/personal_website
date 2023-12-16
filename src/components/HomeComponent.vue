<template>
    <div class="home">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6">
                    <v-card class="py-10 px-5" variant="outlined">
                        <!-- <h1 class="display-4">Welcome to My Portfolio</h1> -->
                        <v-card-text>
                            <p class="subtitle-1">Transforming ideas Into <span style="color: blue;">innovative
                                    solutions</span>.</p>
                            <p class="subtitle-1">One project at a time.</p>
                            <v-btn prepend-icon="mdi-arrow-top-right" variant="outlined" rounded color="primary"
                                class="mt-4">Let's
                                talk</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.v-parallax {
    background-color: #7c0000;
    background-image: linear-gradient(326deg, #7c0000 0%, #3e0000 74%);
    background-size: cover;
}

.home {
    height: 100vh;
    display: flex;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    font-family: 'Rubik Variable', sans-serif;
}

.display-4 {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.subtitle-1 {
    font-size: 2rem;
    line-height: 1.3;
    /* Add spacing between lines */
}

.bold-color {
    font-weight: bold;
    color: #FF0000;
    /* Replace with your desired color */
}

.mt-4 {
    margin-top: 1rem;
}
</style>
