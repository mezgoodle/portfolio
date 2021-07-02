<template>
  <div>
    <Header />
    <Profiles />
    <Loader v-if="loading"/>
    <Main 
      v-else-if="repos.length"
      v-bind:repos="repos"
      v-bind:numberOfProjects="numberOfProjects"
    />
    <div v-else class="container alert alert-danger text-center" role="alert">
      No projects
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Loader from '@/components/Loader.vue'
import Profiles from '@/components/Profiles.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'App',
  data () {
    return {
      repos: [],
      numberOfProjects: 0,
      loading: true
    }
  },
  async mounted () {
    const res = await fetch('https://api.github.com/users/mezgoodle/repos?sort=updated');
    const repos = [];
    for (const repo of await res.json()) {
      if (!repo.archived) {
        repos.push(repo);
      }
    }
    this.repos = repos.slice(0, 9);
    this.numberOfProjects = this.repos.length;
    this.loading = false;
  },
  components: {
    Header, Main, Loader, Profiles, Footer
  }
}
</script>

<style>
</style>
