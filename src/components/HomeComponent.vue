<template>
  <div class="home">
    <div class="container">

          <h3 class="title">Transforming ideas Into <span style="color: blue;">innovative
                                    solutions</span>,</h3>
          <h3 class="title">one project at a time.</h3>
          <p class="subtitle">
            Beyond code, we specialize in capturing the essence of your vision. Crafting software that not only
            functions flawlessly but also delivers an unforgettable user experience.
          </p>
          <v-btn prepend-icon="mdi-arrow-top-right" variant="outlined" rounded
                 color="primary" class="mt-4">Let's
            talk
          </v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 60%;
  justify-content: center;
  scroll-behavior: smooth;
  gap: 10px;
}

.subtitle {
  margin-top: 10px;
  margin-bottom: 10px;
  opacity: 0.85;
}

.home {
  height: 100vh;
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  font-family: 'Sora', sans-serif;
  font-weight: bold;
  /*font-family: 'Rubik Variable', sans-serif;*/
}

.title {
  font-weight: 400;
  /* Add spacing between lines */
}


.v-btn {
  border-radius: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  align-self: end;
}


</style>
