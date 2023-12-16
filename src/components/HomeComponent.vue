<template>
    <div class="home">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6">
                    <h1 class="display-4">Welcome to My Portfolio</h1>
                    <p class="subtitle-1">ipsem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam commodi, iste exercitationem dicta autem ducimus atque ea doloribus illum ipsa, ex alias dolorum illo, cumque minima. Voluptatibus ab similique iure!</p>
                    <v-btn color="primary" class="mt-4">View Projects</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.home {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
}

.display-4 {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.subtitle-1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.mt-4 {
    margin-top: 1rem;
}
</style>
