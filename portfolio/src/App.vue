<template>
  <div>
    <Header />
    <Profiles />
    <Loader v-if="loading"/>
    <Main 
      v-else-if="repos.length"
      v-bind:repos="repos"
    />
    <div v-else class="container alert alert-danger text-center" role="alert">
      No projects
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Loader from '@/components/Loader.vue'
import Profiles from '@/components/Profiles.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'App',
  data () {
    return {
      repos: [],
      loading: true
    }
  },
  async mounted () {
    const res = await fetch('https://api.github.com/users/mezgoodle/repos?sort=updated');
    const repos = await res.json();
    this.repos = repos;
  },
  components: {
    Header, Main, Loader, Profiles
  }
}
</script>

<style>
</style>
