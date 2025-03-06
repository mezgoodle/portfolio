<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ project.description }}</p>
      <a :href="project.link" target="_blank" class="btn btn-primary"
        >Переглянути проєкт</a
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
