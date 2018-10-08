<template>
  <div class="home">
    <b-hero is-fullheight class="has-bg-img">
      <main-navbar></main-navbar>
      <b-hero-body>
       <b-container>
         <b-title class="is-white">A dumb boilerplate for Vuejs websites</b-title>
         <b-title class="is-white">
           Vuejs + Bulma components + Sass <p>{{ $t("message.hello") }}</p>
         </b-title>
       </b-container>
      </b-hero-body>
    </b-hero>
    <b-hero is-fullheight>
      <b-subtitle>
        Intro
      </b-subtitle>
      <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <b-title is-4>Installed CLI Plugins</b-title>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank" rel="noopener">unit-jest</a></li>
    </ul>
    <b-title is-4>Essential Links</b-title>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <b-title is-4>Ecosystem</b-title>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    </b-hero>
    <b-title is-4>Other Packages</b-title>
    <ul>
      <li><a href="https://www.npmjs.com/package/vue-bulma-components">Vue Bulma components</a></li>
      <li><a href="https://www.npmjs.com/package/vue-i18n">Vue i18n</a></li>
      <li><a href="https://www.npmjs.com/package/axios">Axios</a></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavbar from '@/components/partials/MainNavbar.vue'
import '@/assets/scss/main.scss'

export default {
  name: 'home',
  components: {
    MainNavbar
  }
}
</script>
