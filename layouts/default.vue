<template>
  <div>
    <header class="bg-primary text-white py-3">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand">Моє портфоліо</NuxtLink>
      </div>
    </header>
    <main class="py-4">
      <slot />
    </main>
    <footer class="bg-light py-3 text-center">
      <p>© {{ new Date().getFullYear() }} Твоє ім'я</p>
    </footer>
  </div>
</template>
