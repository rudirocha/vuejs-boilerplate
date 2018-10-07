<template>
  <div>
        <b-navbar is-transparent role="navigation" aria-label="main navigation">
                <b-navbar-brand>
                  <router-link to="/" class="navbar-item brand-name">Dumb Template</router-link>
                  <b-navbar-burger>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                  </b-navbar-burger>
                </b-navbar-brand>
                <b-navbar-menu>
                  <b-navbar-item>
                      <router-link to="/" class="navbar-item">Home</router-link>
                      <router-link to="/about" class="navbar-item">About</router-link>
                  </b-navbar-item>
                </b-navbar-menu>
              </b-navbar>
  </div>
</template>
<style scoped>
</style>
