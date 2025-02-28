<template>
  <div>
    <h1>Моє портфоліо</h1>
    <!-- <img src="/profile.jpg" alt="Фото" /> -->
    <p>Коротка інформація про мене</p>

    <h2>Посилання</h2>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <component :is="link.icon" />
        <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Github, Linkedin } from "lucide-vue-next";
const links = [
  { name: "GitHub", url: "https://github.com/", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com/", icon: Linkedin },
];
</script>
