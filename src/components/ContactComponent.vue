<template>
  <v-container class="contact" fluid>
    <v-col cols="12" sm="8" md="6">
      <p class="header">Let's talk</p>
      <p class="subheading">Fill in the form below, or contact me directly at <span
          style="color: blue;">contact@kdigital.com</span> and i will get back to you
        as soon as
        possible.</p>
      <v-form @submit.prevent="submitForm">
        <v-text-field variant="underlined" v-model="name" label="Name" required></v-text-field>
        <v-text-field variant="underlined" v-model="email" label="Email" required></v-text-field>
        <v-textarea variant="underlined" v-model="message" label="Tell me about your project" required></v-textarea>
      </v-form>
      <v-row justify="end" class="mt-2">
        <v-btn class="px-3" flat append-icon="mdi-arrow-right" variant="outlined" type="submit"
          color="primary">Submit</v-btn>

      </v-row>
      <!-- <vue-recaptcha sitekey="123"></vue-recaptcha> -->

    </v-col>

  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import VueRecaptcha from 'vue-recaptcha';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  // Handle form submission logic here
};
</script>

<style scoped>
.contact {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  /*font-family: 'Rubik Variable', sans-serif;*/

  /* Add this line to center vertically */
  text-align: start;
  /* Add this line to center horizontally */
}

.subheading {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.header {
  font-weight: semi-bold;
  font-size: 2rem;
  margin-bottom: 1rem;

}

.v-btn {
  border-radius: 0%;
}

/* Add custom styles here */
</style>
