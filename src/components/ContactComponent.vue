<template>
    <div class="contact">
        <v-card>
            <v-card-title class="headline">Contact Us</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="submitForm">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="name" label="Name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="email" label="Email" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-textarea v-model="message" label="Message" required></v-textarea>
                    <v-btn type="submit" color="primary">Submit</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
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
    background-color: #f5f5f5;

}
/* Add custom styles here */
</style>
