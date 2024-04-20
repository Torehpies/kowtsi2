<template>
  <div class="bg-container p-8 rounded shadow-md w-full sm:w-96 font-sans">
    <h2 class="text-2xl font-bold mb-4 text-center">Register</h2>

    <form @submit.prevent="submitForm">
      <!-- Email -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-white"
          >Email</label
        >
        <input
          v-model="formData.email"
          type="text"
          id="email"
          name="email"
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

      <!-- Confirm Password -->
      <div class="mb-4">
        <label
          for="confirm_password"
          class="block text-sm font-medium text-white"
          >Confirm Password</label
        >
        <input
          v-model="formData.confirmPassword"
          type="password"
          id="confirm_password"
          name="confirm_password"
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
import axios from 'axios'
export default {
  data() {
    return {
      formData: {
        email: '', 
        password: '',
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:5000/register', this.formData);
        console.log('Account created');
      } catch (error) {
        console.error(error);
      }
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
