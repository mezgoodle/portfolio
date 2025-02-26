<template>
  <div
    class="min-h-screen flex flex-col items-center bg-gray-100 text-gray-900"
  >
    <header class="w-full bg-white shadow-md py-4 px-6">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Моє Портфоліо</h1>
        <ul class="flex gap-4">
          <li><NuxtLink to="/" class="hover:underline">Головна</NuxtLink></li>
          <li>
            <NuxtLink to="/projects" class="hover:underline"
              >Пет-проекти</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow container mx-auto p-6">
      <NuxtPage />
    </main>

    <footer class="w-full bg-white shadow-md py-4 px-6 text-center">
      <p>&copy; {{ new Date().getFullYear() }} Моє Портфоліо</p>
    </footer>
  </div>
</template>
