<template>
  <div class="bg-container p-8 rounded shadow-md w-full sm:w-96 font-sans">
    <h2 class="text-2xl font-bold mb-4 text-center">Register</h2>

    <form @submit.prevent="submitForm">
      <!-- Username -->
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-white"
          >Username</label
        >
        <input
          v-model="formData.username"
          type="text"
          id="username"
          name="username"
          class="mt-1 p-2 border border-black rounded-md w-full text-black"
          required
        />
      </div>

      <!-- Password -->
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-white"
          >Password</label
        >
        <input
          v-model="formData.password"
          type="password"
          id="password"
          name="password"
          class="mt-1 p-2 border border-black rounded-md w-full text-black"
          required
        />
      </div>

      <!-- Submit Button -->
      <div class="text-center">
        <button
          type="submit"
          class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.formData);
      // Reset form data after submission
      this.formData = {
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
      };
    },
  },
};
</script>

<style scoped>
input,
select {
  color: black;
}
</style>
