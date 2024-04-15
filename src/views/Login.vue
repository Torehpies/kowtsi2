<template>
  <body>
    <div class="login" :style="{ justifyContent: 'center' }">
      <!-- <h3>Hi</h3>
      <router-link to="/home">Home</router-link> -->
      <SignUp class="sign-up" style="z-index: 2" />
      <Wave class="wave" style="z-index: 1" />
    </div>
  </body>
</template>

<script setup>
import { ref } from "vue";
import SignUp from "../components/SignUp.vue";
import Wave from "../components/Wave.vue";
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
