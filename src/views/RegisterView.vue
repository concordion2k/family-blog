<template>
  <div class="container">
    <h1>Register</h1>
    <p>Use the form below to register for the Douston Family Blog!</p>
    <p>You will receive an email once your account has been activated.</p>
    <div class="form-container">
      <form action="#">
        <input v-model="username" type="text" placeholder="Username" data-testid="uname" required>
        <input v-model="pass1" type="password" placeholder="Password" data-testid="pass1" required>
        <input v-model="pass2" type="password" placeholder="Re-Enter Password" data-testid="pass2" required>
        <input v-model="email" type="email" placeholder="Email" data-testid="email" require pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/">
        <button type="submit">Register</button>
      </form>

    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "RegisterView",
  data() {
    return {
      username: "",
      pass1: "",
      pass2: "",
      email: ""
    }
  },
  methods: {
    async onRegister() {
      if (this.pass1 !== this.pass2) {
        alert("Password's must match!");
        return;
      }
      this.username = "";
      this.pass1 = "";
      this.pass2 = "";
      this.email = "";
      alert("Your registration request has been sent!");
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: fit-content;
  margin: 20px 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  width: 300px;
}

input {
  width: 100%;
  margin: 5px auto;
  height: 30px;
  font-size: 15px;
  text-indent: 10px;
  border: 1px solid lightgray;
  border-radius: 3px;
}

button {
  width: 100px;
  height: 35px;
  margin-left: auto;
  margin-top: 10px;
  border-radius: 5px;
}
</style>