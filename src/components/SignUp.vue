<script setup>
import Checked from "./Checked.vue";
</script>
<template>
  <div class="container">
    <div class="contents">
      <form action="/submit_form" method="POST" class="form">
        <h1>Sign Up</h1>
        <!-- Form fields will go here -->

        <label class="bawal" for="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label class="bawal" for="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label class="bawal" for="password">Password</label>
        <input type="password" id="password" name="password" required />
        <checkbox />
        <!--dagdag ng date of birth at gender-->
        <Checked />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
