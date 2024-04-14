<template>
  <input
    type="checkbox"
    id="gender"
    class="checkbox-input"
    v-model="isChecked"
  />
  <label for="gender" class="checkbox-label">
    <span class="knob"></span>
  </label>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>

<style scoped>
.checkbox-input {
  display: none;
}

.checkbox-label {
  cursor: pointer;
  display: flex;
  width: 100px;
  height: 40px;
  border-radius: 50px;
  background-color: #e5e9ea;
  position: relative;
  bottom: 7px;
}

.knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: #fbd4e6;
  box-shadow: 0 0 0 2px #f470a7;
  transition: transform 0.3s ease;
}

.checkbox-input:checked + .checkbox-label .knob {
  transform: translateX(60px);
  background-color: #e2ecf4;
  box-shadow: 0 0 0 2px #a1c6dd;
}
</style>
