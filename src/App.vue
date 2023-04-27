<template>
  <h1 class="title">Douston Family Blog</h1>
  <NavBar />
  <router-view></router-view>
  <FooterBar />
</template>

<script lang="ts">
import NavBar from "./components/Nav.vue";
import FooterBar from "./components/Footer.vue";
export default {
  name: "AppComponent",
  components: {
    NavBar,
    FooterBar,
  }
}
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

.title {
  margin: 20px auto;
  font-family:cursive;
}

.container {
  width: 100%;
  height: 800px;
  margin: 20px 20px;
}
</style>
