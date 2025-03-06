<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ game.title }}</h5>
      <p class="card-text">Прогрес: {{ game.progress }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  game: {
    type: Object,
    required: true,
  },
});
</script>
