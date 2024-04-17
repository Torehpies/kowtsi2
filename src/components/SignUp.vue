<template>
  <div class="bg-container p-8 rounded shadow-md w-full sm:w-96 font-sans">
    <h2 class="text-2xl font-bold mb-4 text-center">Register</h2>

    <form @submit.prevent="submitForm">
      <!-- First Name -->
      <div class="mb-4">
        <label for="first_name" class="block text-sm font-medium text-white"
          >First Name</label
        >
        <input
          v-model="formData.firstName"
          type="text"
          id="first_name"
          name="first_name"
          class="mt-1 p-2 border border-black rounded-md w-full text-black"
          required
        />
      </div>

      <!-- Middle Name -->
      <div class="mb-4">
        <label for="middle_name" class="block text-sm font-medium text-white"
          >Middle Name</label
        >
        <input
          v-model="formData.middleName"
          type="text"
          id="middle_name"
          name="middle_name"
          class="mt-1 p-2 border border-black rounded-md w-full text-black"
        />
      </div>

      <!-- Last Name -->
      <div class="mb-4">
        <label for="last_name" class="block text-sm font-medium text-white"
          >Last Name</label
        >
        <input
          v-model="formData.lastName"
          type="text"
          id="last_name"
          name="last_name"
          class="mt-1 p-2 border border-black rounded-md w-full text-black"
          required
        />
      </div>

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

      <!-- Gender -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-white">Gender</label>
        <select
          v-model="formData.gender"
          class="mt-1 p-2 border border-black rounded-md w-full text-black"
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
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
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
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
