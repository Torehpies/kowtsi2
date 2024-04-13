<script setup>
  import { ref } from 'vue'           

  const brown= ref('#ce7d50')
</script>

<template>
  <div class=full-screen-div :style="{ backgroundColor: brown }">

  </div>
</template>
  
<style scoped>
  .full-screen-div{
    width: 100vw;
    height: 100vh;
  }
</style>
