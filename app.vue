<script setup>
import { HomeIcon, FolderIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100 text-gray-900">
    <!-- Header -->
    <header class="bg-white shadow-md py-4 px-6">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Моє Портфоліо</h1>
        <ul class="flex gap-6">
          <li>
            <NuxtLink
              to="/"
              class="flex items-center gap-2 hover:text-blue-600"
            >
              <HomeIcon class="w-5 h-5" />
              Головна
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/projects"
              class="flex items-center gap-2 hover:text-blue-600"
            >
              <FolderIcon class="w-5 h-5" />
              Пет-проекти
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Main content -->
    <main class="flex-grow container mx-auto p-6">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-white shadow-md py-4 text-center p-4">
      <p>&copy; {{ new Date().getFullYear() }} Моє Портфоліо</p>
    </footer>
  </div>
</template>
