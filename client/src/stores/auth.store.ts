// src/stores/auth.store.js
import { writable } from "svelte/store";

function createAuthStore() {
  // Initialize from localStorage
  const token = localStorage.getItem("token");
  const { subscribe, set } = writable(!!token);

  return {
    subscribe,
    login: (token: string) => {
      localStorage.setItem("token", token);
      set(true);
    },
    logout: () => {
      localStorage.removeItem("token");
      set(false);
    },
    set, // optional if you want direct control
  };
}

export const isLoggedIn = createAuthStore();
