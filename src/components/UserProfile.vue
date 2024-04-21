<template>
  <div v-if="user">
    <h2>Welcome, {{ user.displayName }}!</h2>
    <img
      v-if="user.photoURL"
      :src="user.photoURL"
      alt="Profile Picture"
      style="max-width: 150px; border-radius: 50%"
    />
    <button
      @click="signOut"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
    >
      Sign Out
    </button>
  </div>
  <div v-else>
    <p>Loading user profile...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { auth } from "@/firebaseConfig"; // Import Firebase authentication instance
import { useRouter } from "vue-router";

const user = ref(null);
const router = useRouter();

// Fetch user profile on component mount
onMounted(() => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    user.value = currentUser;
  }
});

// Sign out function
const signOut = async () => {
  try {
    await auth.signOut();
    router.push("/login"); // Redirect to login page after sign out
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};
</script>

<style scoped>
/* Add custom styles for UserProfile.vue component */
</style>
