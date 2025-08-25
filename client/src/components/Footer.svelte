<script>
  import { push } from "svelte-spa-router";
</script>

<footer class="bg-gray-900 text-gray-300 py-6 mt-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Top Section -->
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      <!-- Logo / Title -->
      <div class="flex items-center gap-2 text-white font-semibold text-lg">
        <img src="/logo.png" alt="AI Study Planner" class="h-8 w-8" />
        AI Study Planner
      </div>

      <!-- Navigation -->
      <nav class="flex gap-6 text-sm">
        <button onclick={() => push("/")} class="hover:text-white transition">Home</button>
        <button onclick={() => push("/about")} class="hover:text-white transition">About</button>
        <button onclick={() => push("/login")} class="hover:text-white transition">Login</button>
        <button onclick={() => push("/register")} class="hover:text-white transition">Register</button>
      </nav>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-700 my-4"></div>

    <!-- Bottom Section -->
    <div class="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
      <p>© {new Date().getFullYear()} AI Study Planner. All rights reserved.</p>

      <!-- Social Icons -->
      <div class="flex gap-4 mt-2 md:mt-0">
        <a href="#" aria-label="Twitter" class="hover:text-white transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19.633 7.997c.014.199.014.398.014.597 0 6.087-4.63 13.104-13.104 13.104-2.61 0-5.042-.756-7.09-2.074.363.043.713.057 1.09.057a9.236 9.236 0 005.73-1.975 4.605 4.605 0 01-4.296-3.188c.28.042.553.07.847.07.405 0 .81-.056 1.19-.154A4.6 4.6 0 012.93 9.75v-.057a4.63 4.63 0 002.074.584A4.596 4.596 0 012.936 7.4c0-.847.225-1.624.62-2.302a13.07 13.07 0 009.493 4.817 5.19 5.19 0 01-.112-1.053 4.595 4.595 0 014.595-4.595c1.325 0 2.524.553 3.366 1.446a9.04 9.04 0 002.918-1.118 4.59 4.59 0 01-2.016 2.533A9.14 9.14 0 0022 6.074a9.86 9.86 0 01-2.367 2.447z"
            />
          </svg>
        </a>
        <a href="#" aria-label="GitHub" class="hover:text-white transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.388.6.112.793-.26.793-.577v-2.157c-3.338.724-4.043-1.415-4.043-1.415-.546-1.38-1.333-1.748-1.333-1.748-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.775.42-1.305.763-1.606-2.665-.305-5.467-1.333-5.467-5.931 0-1.31.469-2.381 1.236-3.22-.124-.305-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.46 11.46 0 016.003 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.649.241 2.871.117 3.176.767.839 1.236 1.91 1.236 3.22 0 4.61-2.807 5.624-5.479 5.921.431.37.824 1.103.824 2.222v3.293c0 .317.193.689.799.577C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>
