<template>
  <div class="footer">
    <div class="footer-item logo">DFB</div>
    <div class="footer-item right copyright"><div>© Dan Douston</div></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CardComponent",
}
</script>

<style scoped>
.footer {
  display: flex;
  width: 100%;
  margin: 20px;
  border: 1px solid lightgray;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.footer-item {
  padding: 20px;
  background-color: whitesmoke;
}

.copyright { 
  display: flex;
}

.copyright div {
  margin: auto;
}

.logo {
  font-size: 28px
}

.right {
  margin-left: auto;
}
</style>