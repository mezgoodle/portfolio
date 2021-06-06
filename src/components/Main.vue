<template>
  <main>
    <div class="album py-5 bg-light">
        <figure class="text-center">
          <blockquote class="blockquote">
              <p class="display-5">My last {{numberOfProjects}} projects</p>
          </blockquote>
          <figcaption class="blockquote-footer">
              Coding <cite title="non-stop">everyday</cite>
          </figcaption>
        </figure>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <RepoCard 
                v-for="repo of repos" :key="repo"
                v-bind:repo="repo"
              />
          </div>
        </div>
    </div>
  </main>
</template>

<script>
import RepoCard from '@/components/RepoCard.vue'

export default {
  name: 'Main',
  props: ['repos', 'numberOfProjects'],
  components: {
    RepoCard
  }
}
</script>
