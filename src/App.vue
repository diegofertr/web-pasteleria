<template>
  <div id="app">
    <app-header></app-header>
    <!-- <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Acerca de</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/layout/AppHeader";

export default {
  components: {
    AppHeader
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fira+Sans&display=swap");

#app {
  font-family: "Fira Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fafafa;
}

// Import Font Awesome 5 Free
$fa-css-prefix: "el-icon-fa";
$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";

@import "~@fortawesome/fontawesome-free/scss/fontawesome.scss";
@import "~@fortawesome/fontawesome-free/scss/solid.scss";
@import "~@fortawesome/fontawesome-free/scss/brands.scss";

// Override Element UI's icon font
.fas {
  font-family: "Font Awesome 5 Free" !important;
}

.fab {
  font-family: "Font Awesome 5 Brands" !important;
}
</style>
