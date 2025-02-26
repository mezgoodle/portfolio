<template>
  <div>
    <h1>Моє портфоліо</h1>
    <!-- <img src="/profile.jpg" alt="Фото" /> -->
    <p>Коротка інформація про мене</p>

    <h2>Посилання</h2>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const links = [
  { name: "GitHub", url: "https://github.com/" },
  { name: "LinkedIn", url: "https://linkedin.com/" },
];
</script>
