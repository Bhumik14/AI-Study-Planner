<script>
  import { push } from "svelte-spa-router";
  import { isLoggedIn } from "../stores/auth.store";
</script>

<div class="bg-white shadow-md w-full">
  <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <!-- Logo / Title -->
    <button
      onclick={() => push("/")}
      class="flex items-center space-x-2 cursor-pointer"
    >
      <img src="src/assets/logo.png" alt="AI Study Planner" class="h-8 w-8" />
      <span
        class="text-xl font-semibold text-indigo-600 hover:text-indigo-700 transition"
      >
        AI Study Planner
      </span>
    </button>

    <!-- Navigation -->
    <nav class="space-x-4">
      <button
        class="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 transition"
        onclick={() => push("/")}
      >
        Home
      </button>

        {#if !isLoggedIn}
        <button
          class="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          onclick={() => push("/login")}
        >
          Login
        </button>
        {/if}
        
        {#if isLoggedIn}
        <button
          class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          onclick={() => {
            localStorage.removeItem("token");
            isLoggedIn.set(false);
            push("/login");
          }}
        >
          Logout
        </button>
        {/if}

    </nav>
  </div>
</div>
