<template>
  <body>
    <div class="login" :style="{ justifyContent: 'center' }">
      <!-- <h3>Hi</h3>
      <router-link to="/home">Home</router-link> -->
      <SignIn class="sign-up" style="z-index: 2" />
      <Wave class="wave" style="z-index: 1" />
      <GoogleSignIn />
    </div>
  </body>
</template>

<script setup>
import { ref } from "vue";
import SignIn from "../components/SignIn.vue";
import Wave from "../components/Wave.vue";
import GoogleSignIn from "../components/GoogleSignIn.vue";
</script>

<style scoped>
html,
body {
  display: flex;
  align-items: center;
  justify-content: center; /* Center content horizontally */
  margin: 0;
  height: 100vh;
  width: 100vw;
  background-color: #d6d6db;
  overflow: hidden;
}

.login {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
}
</style>
