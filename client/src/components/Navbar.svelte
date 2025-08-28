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
      <span class="text-xl font-semibold text-indigo-600 hover:text-indigo-700 transition">
        AI Study Planner
      </span>
    </button>

    <!-- Navigation -->
    <nav class="space-x-4 flex items-center">
      <button
        class="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 transition"
        onclick={() => push("/")}
      >
        Home
      </button>

      <button
        class="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 transition"
        onclick={() => push("/learning")}
      >
        Resume
      </button>

      <button
        class="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 transition"
        onclick={() => push("/practice")}
      >
        Practice
      </button>

      {#if !$isLoggedIn}
        <!-- Animated Login Button -->
        <button
          onclick={() => push("/login")}
          class="
            group
            relative
            px-5
            py-2.5
            text-base
            font-medium
            rounded-lg
            bg-indigo-600
            text-white
            overflow-hidden
            transition
            duration-300
            hover:bg-indigo-700
          "
        >
          <!-- Default Text -->
          <span
            class="
              block
              transition-all
              duration-300
              group-hover:opacity-0
              group-hover:-translate-y-1
            "
          >
            Login
          </span>

          <!-- Hover Text -->
          <span
            class="
              block
              absolute
              inset-0
              flex
              items-center
              justify-center
              opacity-0
              translate-y-1
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            Welcome
          </span>
        </button>
      {:else}
        <button
          class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          onclick={() => {
            isLoggedIn.logout();
          }}
        >
          Logout
        </button>
      {/if}
    </nav>
  </div>
</div>
