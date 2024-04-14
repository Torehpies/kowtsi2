<script setup>
  const props = defineProps({
    bgColor: String
  });
</script>

<template>
  <div class=container :style="{backgroundColor: bgColor}">
    <p> hi </p>
  </div>
</template>

<style scoped>
  
</style>
