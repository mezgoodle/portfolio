<template>
  <div class="col">
    <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Templates" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
          <title>Templates</title>
          <rect width="100%" height="100%" fill="#55595c"/>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">Templates</text>
        </svg>
        <div class="card-body">
          <p class="card-text">📚I create this repository to help me create useful files in every my project. This is my style of developing🔖 </p>
          <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="https://github.com/mezgoodle/Templates" class="pr-1" target="_blank"><button type="button" class="btn btn-sm btn-outline-secondary">View</button></a>
                <a href="https://github.com/mezgoodle/Templates/archive/master.zip"><button type="button" class="btn btn-sm btn-outline-secondary">Download</button></a>
              </div>
              <small class="text-muted">2 stars</small>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepoCard',
  props: {
    repo: {
      type: Object,
      required: true
    }
  },
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
