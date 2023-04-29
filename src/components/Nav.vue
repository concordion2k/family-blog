<template>
  <div class="nav">
    <router-link class="nav-item" to="/">Home</router-link>
    <router-link class="nav-item" to="/about">About</router-link>
    <router-link class="nav-item right" to="/register">Register</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavComponent",
}
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

.nav {
  display: flex;
  width: 100%;
  margin: 20px;
  border: 1px solid lightgray;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.nav-item {
  padding: 20px;
}

.is-active,
.nav-item:hover {
  color: white;
  background-color: rgb(69, 69, 69);
}

.right {
  margin-left: auto;
}

@media only screen and (max-width: 600px) {
  .nav { 
    flex-wrap: wrap;
  }
  .nav-item {
    width: 100%;
  }
  
}
</style>