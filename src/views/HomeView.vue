<template>
  <div class="container">
    <div class="left-side">
      <h1 class="thing">Welcome!</h1>
      <p>You have arrived at the Douston Family Blog!</p>
      <p>Here, you can catch up on the happenings at the Douston / Graham household. We often get into mamny shenanigans, especially with our little one!</p>
      <p>We aim to keep this site private. As such, to gain access to the blog you must <router-link to="/register">Register</router-link>. Once your registration has been reviewed and approved, you'll be given access!</p>
    </div>
    <div class="right-side">
      <img class="family-photo" src="@/assets/images/family.jpeg" width="700">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HomeView",
}
</script>

<style scoped>
h1,
p {
  width: 100%;
  height: fit-content;
  margin-bottom: 5px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  margin: 20px 20px;
}

.left-side,
.right-side {
  width: 40%;
  margin: auto;
}

.family-photo {
  margin: auto;
  max-width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>