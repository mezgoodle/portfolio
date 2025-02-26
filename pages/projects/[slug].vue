<template>
  <div>
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <NuxtLink to="/projects">Назад</NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const projects = {
  "study-helper": {
    name: "StudyHelper",
    description: "Телеграм-бот для навчання",
  },
  "uno-counter": { name: "UnoCounter", description: "Лічильник для гри в Uno" },
};
const project = projects[route.params.slug] || {
  name: "Не знайдено",
  description: "",
};
</script>
