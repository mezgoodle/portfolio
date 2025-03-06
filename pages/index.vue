<template>
  <div class="container py-4">
    <h1 class="display-4 mb-4">Моє портфоліо</h1>

    <Bio />

    <section class="mt-4">
      <h2 class="h4 mb-3">Проєкти</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="project in projects" :key="project.id" class="col">
          <ProjectCard :project="project" />
        </div>
      </div>
    </section>

    <section class="mt-4">
      <h2 class="h4 mb-3">Посилання</h2>
      <div class="d-flex gap-3">
        <Link v-for="link in links" :key="link.id" :link="link" />
      </div>
    </section>

    <section class="mt-4">
      <h2 class="h4 mb-3">Пройдені ігри</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="game in games" :key="game.id" class="col">
          <GameCard :game="game" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    id: 1,
    title: "Проєкт 1",
    description: "Опис проєкту 1",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Проєкт 2",
    description: "Опис проєкту 2",
    link: "https://example.com/project2",
  },
]);

const links = ref([
  { id: 1, name: "GitHub", url: "https://github.com/ваш_нікнейм" },
  { id: 2, name: "LinkedIn", url: "https://linkedin.com/in/ваш_профіль" },
]);

const games = ref([
  { id: 1, title: "Гра 1", progress: "Пройдено на 100%" },
  { id: 2, title: "Гра 2", progress: "Пройдено на 75%" },
]);
</script>
