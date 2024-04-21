<!-- GoogleSignIn.vue -->

<template>
  <div
    class="flex items-center justify-center bg-container p-8 rounded shadow-md w-full sm:w-96 font-sans"
  >
    <h1>Google Sign in Authentication</h1>
    <button
      @click="signInWithGoogle"
      class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
    >
      <img
        class="w-6 h-6"
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
      <span>Login with Google</span>
    </button>
  </div>
</template>

// GoogleSignIn.vue

<script setup>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();
const router = useRouter();

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    router.push({ name: "Profile" });
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
  }
};
</script>
