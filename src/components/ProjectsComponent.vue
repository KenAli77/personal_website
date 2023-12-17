<template>
    <div class="case-studies">
        <div class="case-study" v-for="caseStudy in caseStudies" :key="caseStudy.id">
            <v-card flat variant="outlined">
                <v-card-title>{{ caseStudy.title }}</v-card-title>
                <v-card-text>{{ caseStudy.description }}</v-card-text>
                <v-card-actions>
                    <v-btn color="primary" flat variant="outlined">see more</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts" setup>

const caseStudies = [
    {
        id: 1,
        image: "https://github.com/KenAli77/InFit/blob/master/inFit_banner_1.png",
        title: "Infit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        image: "/path/to/image2.jpg",
        title: "Expense tracker",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more case studies here
]

</script>

<style scoped>
.case-studies {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
}

.case-study {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
}

.case-study-image {
    width: 100%;
    max-width: 300px;
    height: auto;
}

.v-btn {
    border-radius: 0%;
}

.case-study-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.case-study-description {
    font-size: 14px;
    color: #666;
}
</style>
