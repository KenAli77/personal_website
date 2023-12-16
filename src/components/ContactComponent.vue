<template>
    <v-container class="contact" fluid>
      <v-col>
        <h1 class="header">Let's talk</h1>
        <p>Fill in the form below, or contact me directly – and i will get back to you as soon as
          possible.</p>
        <v-form @submit.prevent="submitForm">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field variant="underlined" v-model="name" label="Name" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field variant="underlined" v-model="email" label="Email" required></v-text-field>
            </v-col>
          </v-row>
          <v-textarea variant="underlined" v-model="message" label="Tell me about your project" required></v-textarea>
          <v-btn rounded variant="outlined" type="submit" color="primary">Submit</v-btn>
        </v-form>
      </v-col>

    </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

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
    justify-content: center;
}
.header{
  font-weight: bold;
}
/* Add custom styles here */
</style>
