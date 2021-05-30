<template>
  <div class="col">
    <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: {{repo.name}}" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
          <title>Templates</title>
          <rect width="100%" height="100%" v-bind:fill=getColor />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">{{repo.name}}</text>
        </svg>
        <div class="card-body">
          <p class="card-text">{{repo.description}}</p>
          <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a v-bind:href=repo.html_url class="pr-1" target="_blank"><button type="button" class="btn btn-sm btn-outline-primary">View</button></a>
                <a v-bind:href=archiveUrl><button type="button" class="btn btn-sm btn-outline-info">Download</button></a>
              </div>
              <small class="text-muted" v-if="repo.stargazers_count">{{createText}}</small>
              <small class="text-muted" v-else>0 stars</small>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepoCard',
  data () {
    return {
      color: 'green'
    }
  },
  props: {
    repo: {
      type: Object,
      required: true
    }
  },
  computed: {
    archiveUrl () {
      return `${this.repo.html_url}/archive/${this.repo.default_branch}.zip`
    },
    getColor () {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    createText () {
      let text = '';
      if (this.repo.stargazers_count === 1) {
        text += `${this.repo.stargazers_count} star and `
      } else if (this.repo.stargazers_count > 1) {
        text += `${this.repo.stargazers_count} stars and `
      } else {
        text += 'Zero stars and '
      }
      if (this.repo.watchers_count === 1) {
        text += `${this.repo.watchers_count} watcher`
      } else if (this.repo.watchers_count > 1) {
        text += `${this.repo.watchers_count} watchers`
      } else {
        text += 'zero watchers'
      }
      return text
    }
  }
}
</script>

<style scoped>
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>
