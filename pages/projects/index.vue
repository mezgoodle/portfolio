<template>
  <div>
    <h1>Пет-проекти</h1>
    <ul>
      <li v-for="project in projects" :key="project.slug">
        <NuxtLink :to="`/projects/${project.slug}`">{{
          project.name
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const projects = [
  { name: "StudyHelper", slug: "study-helper" },
  { name: "UnoCounter", slug: "uno-counter" },
];
</script>
