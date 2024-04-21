import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import SignUpForm from "@/views/SignUpForm.vue";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/login", name: "Login", component: Login },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: { requiresAuth: true },
    },
    { path: "/signup", name: "SignUpForm", component: SignUpForm },
  ],
});

// Navigation guard to protect routes that require authentication
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  // Check if the route requires authentication and the user is not authenticated
  if (requiresAuth && !auth.currentUser) {
    next("/login"); // Redirect to the login page
  } else {
    next(); // Allow access to the route
  }
});

export default router;
