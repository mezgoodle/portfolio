<template>
  <header>
    <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4 class="text-white">About my experience</h4>
                <p class="text-muted">I have worked with many technoligies and languages, but my favourite are  <strong>Python</strong> and <strong>JavaScript</strong>. Also I like to work with <strong>Django</strong> and <strong>Flask</strong>. And one of my favourite work is doing <strong>bots</strong>: for Telegram or Github. All my projects you can find on GitHub or GitLab profile.</p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <h4 class="text-white">Contact</h4>
                <ul class="list-unstyled">
                    <li><a href="https://t.me/sylvenis" target="_blank" class="text-white">Write on Telegram</a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100005721694357" target="_blank" class="text-white">Write on Facebook</a></li>
                    <li><a href="https://www.instagram.com/sylvenis/" target="_blank" class="text-white">Follow on Instagram</a></li>
                    <li><a href="mailto:mezidiaofficial@gmail.com" class="text-white">Email me</a></li>
                </ul>
              </div>
          </div>
        </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container">
          <a href="#" class="navbar-brand d-flex align-items-center">
              <div class="pr-1">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-badge" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h7A2.5 2.5 0 0 1 14 2.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2.5zM4.5 1A1.5 1.5 0 0 0 3 2.5v10.795a4.2 4.2 0 0 1 .776-.492C4.608 12.387 5.937 12 8 12s3.392.387 4.224.803a4.2 4.2 0 0 1 .776.492V2.5A1.5 1.5 0 0 0 11.5 1h-7z"/>
                    <path fill-rule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </div>
              <strong>Mezgoodle Portfolio</strong>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
        </div>
    </div>
  </header>
</template>

<script>


export default {
  name: 'Header'
}
</script>
