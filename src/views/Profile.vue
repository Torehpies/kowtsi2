<template>

  <div>
    <img
      :src="user.photoURL"
      alt="Profile Picture"
      class="rounded-full w-16 h-16"
    />
    <h2 class="text-xl font-bold">{{ user.displayName }}</h2>
    <button
      @click="handleSignOut"
      class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
    >
      Sign Out
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();
const router = useRouter();
const user = ref(auth.currentUser);

const handleSignOut = async () => {
  try {
    await signOut(auth);
    router.push({ name: "Login" });
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};
</script>

