<template>
  <v-container class="about-section px-10" fluid>

    <v-row dense style="width: 60%;" class="align-self-center">
      <p class="heading">Boasting extensive experience cultivated across diverse industries and
        international landscapes, I am Ken—an accomplished Software Developer dedicated to delivering exceptional
        solutions and driving customer satisfaction.</p>
    </v-row>

    <v-timeline dense line-inset="10">
      <v-timeline-item v-for="(section, index) in sections" :dot-color="section.color" :key="index" fill-dot
        :icon="section.icon" :opposite="index % 2 === 0">
        <v-card hover variant="outlined">
          <v-card-title>{{ section.title }}</v-card-title>
          <v-card-text>
            {{ section.content }}
          </v-card-text>

        </v-card>
        <template v-slot:opposite>
          <div v-if="index == 0" style="display: flex;">
            <v-btn icon flat variant="outlined" color="green" class="pa-0 ma-2"> <v-icon
                size="x-large">mdi-android</v-icon>
            </v-btn>
            <v-btn color="purple" flat icon variant="outlined" class="pa-0 ma-2"> <v-icon
                size="large">mdi-language-kotlin</v-icon>
            </v-btn>
            <v-btn color="orange" flat icon variant="outlined" class="pa-0 ma-2"> <v-icon
                size="x-large">mdi-language-java</v-icon>
            </v-btn>
            <v-btn color="grey" flat icon variant="outlined" class="pa-0 ma-2"> <v-icon
                size="x-large">mdi-apple-ios</v-icon>
            </v-btn>
            <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->

          </div>

          <div v-if="index == 1" style="display: flex;">
            <v-btn icon flat variant="outlined" color="green" class="pa-0 ma-2"> <v-icon
                size="x-large">mdi-nodejs</v-icon>
            </v-btn>
            <v-btn color="blue" flat icon variant="outlined" class="pa-0 ma-2"> <v-icon
                size="large">mdi-language-typescript</v-icon>
            </v-btn>
            <v-btn color="orange" flat icon variant="outlined" class="pa-0 ma-2"> <v-icon
                size="x-large">mdi-firebase</v-icon>
            </v-btn>
          </div>
          <div v-if="index == 2" style="display: flex;">
            <v-btn icon flat variant="outlined" color="orange" class="pa-0 ma-2"> <v-icon
                size="x-large">mdi-language-javascript</v-icon>
            </v-btn>
            <v-btn color="red" flat icon variant="outlined" class="pa-0 ma-2"> <v-icon size="large">mdi-angular</v-icon>
            </v-btn> <v-btn color="green" flat icon variant="outlined" class="pa-0 ma-2"> <v-icon
                size="large">mdi-vuejs</v-icon>
            </v-btn>
            <v-btn color="purple" flat icon variant="outlined" class="pa-0 ma-2"> <v-icon
                size="x-large">mdi-language-html5</v-icon>
            </v-btn>
            <v-btn color="blue" flat icon variant="outlined" class="pa-0 ma-2"> <v-icon
                size="x-large">mdi-language-css3</v-icon>
            </v-btn>
          </div>
          <div v-if="index == 3" style="display: flex;">
            <v-btn icon flat variant="outlined" color="blue" class="pa-0 ma-2"> <v-icon size="x-large">mdi-docker</v-icon>
            </v-btn>
            <v-btn color="purple" flat icon variant="outlined" class="pa-0 ma-2"> <v-icon
                size="large">mdi-kubernetes</v-icon>
            </v-btn>
            <v-btn color="orange" flat icon variant="outlined" class="pa-0 ma-2"> <v-icon
                size="x-large">mdi-gitlab</v-icon>
            </v-btn>
            <v-btn color="black" flat icon variant="outlined" class="pa-0 ma-2"> <v-icon size="x-large">mdi-linux</v-icon>
            </v-btn>
            <v-btn color="blue" flat icon variant="outlined" class="pa-0 ma-2"> <v-icon
                size="x-large">mdi-atlassian</v-icon>
            </v-btn>
            <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->

          </div>

          <div v-if="index == 5" style="display: flex;">
            <v-btn to="/contact" flat prepend-icon="mdi-arrow-top-right" color="primary" class="mt-4">Let's
              talk</v-btn>

            <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->

          </div>
        </template>

      </v-timeline-item>
    </v-timeline>

    <!-- Contact CTA -->
    <!-- <v-row>
      <v-col>
        <div class="text-h1 mb-4">Ready to embark on a journey of digital innovation?</div>
        <div class="text-subtitle-1 mb-6">
          Let's connect, collaborate, and bring your ideas to life! ✨💻
        </div>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script lang="ts" setup>

const sections = [
  {
    title: 'Mobile Magic',
    content: 'Specializing in Android app development, I wield the power of Kotlin to create seamless and innovative mobile applications. Whether it\'s crafting intuitive user interfaces or diving into the world of multiplatform apps, I\'m your go-to wizard for turning concepts into reality.',
    icon: 'mdi-cellphone',
    color: '#E91E63',
    stackIcons: ["mdi-android", "mdi-kotlin", "mdi-java", "mdi-firebase", "mdi-mongodb", "mdi-mysql"]

  },
  {
    title: 'Backend Brilliance',
    content: 'Behind every exceptional frontend is a robust backend. My toolkit includes Node.js and TypeScript, enabling me to architect scalable and efficient backend solutions. From database design to server-side logic, I thrive on building the backbone of your digital ecosystem.',
    icon: 'mdi-server',
    color: '#9C27B0',
    stackIcons: ["mdi-nodejs", "mdi-firebase", "mdi-mongodb", "mdi-mysql"]

  },
  {
    title: 'Web Wonders',
    content: 'Fluent in the languages of Angular and Vue.js, I design and develop responsive and dynamic web applications. From client-side interactivity to server-side integrations, I orchestrate a symphony of technologies to create a harmonious user experience.',
    icon: 'mdi-web',
    color: '#2196F3',
    stackIcons: ["mdi-vuejs", "mdi-angular", "mdi-language-typescript", "mdi-language-javascript"]
  },
  {
    title: 'Integration Alchemy',
    content: 'Seamlessly connecting disparate systems is my forte. Whether it\'s integrating third-party APIs, harnessing the power of Firebase, or fine-tuning Cloud Functions, I ensure that your digital landscape operates in perfect synergy.',
    icon: 'mdi-code-braces',
    color: '#4CAF50',
    stackIcons: ["mdi-docker", "mdi-kubernetes", "mdi-linux"]
  },
  {
    title: 'Design Dexterity',
    content: 'Beyond functionality, I\'m passionate about crafting visually stunning user interfaces. UI/UX design is not just a step in the process—it\'s an art form. Let\'s transform your ideas into captivating and user-friendly interfaces that leave a lasting impression.',
    icon: 'mdi-palette',
    color: '#FF5722'
  },
  {
    title: 'Infinite Learning, Endless Possibilities',
    content: 'What fuels my passion? The thrill of learning and the joy of problem-solving. I\'m your go-to guy for picking up new skills on the fly and making things work, beautifully.',
    icon: 'mdi-lightbulb-on',
    color: '#FFC107'

  }
]
</script>

<style scoped>
@media (min-width: 1024px) {
  .about-section {
    justify-content: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Rubik Variable', sans-serif;
  }
}

.v-timeline-item {
  margin-bottom: 20px;
}

.heading {
  font-size: 1.3rem;
  line-height: 1.3;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
  /* Add spacing between lines */
}

.v-card {
  background-color: transparent;
  border-color: blue;
  border-radius: 0%;
  padding: 20px;
}

.v-btn {
  border-radius: 0%;
}



</style>
