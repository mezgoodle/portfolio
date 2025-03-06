<template>
  <a :href="link.url" target="_blank" class="link-primary">{{ link.name }}</a>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },
});
</script>
