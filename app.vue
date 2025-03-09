<script setup>
import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();
const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabaseKey
);
const projects = ref([]);

async function getProjects() {
  const { data } = await supabase.from("projects").select();
  projects.value = data;
}

onMounted(() => {
  getProjects();
});
</script>

<template>
  <NuxtLayout>
    <h1>Проєкти</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.title }}
      </li>
    </ul>
    <NuxtPage />
  </NuxtLayout>
</template>
