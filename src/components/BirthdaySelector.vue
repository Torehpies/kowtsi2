<template>
  <div class="birthday-selector">
    <label for="birthday">Date of Birth</label>
    <input type="date" id="birthday" v-model="selectedDate" required />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: null,
    };
  },
};
</script>

<style scoped>
.birthday-selector {
  margin-bottom: 15px;
}
</style>
