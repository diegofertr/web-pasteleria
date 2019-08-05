<template>
  <div id="app">
    <app-header></app-header>
    <!-- <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Acerca de</router-link>
    </div> -->
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/layout/AppHeader'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
@import "assets/scss/index.scss";
</style>
