<script lang="ts">
    import { push } from 'svelte-spa-router';
    import { api } from "../lib/api";
    import { isLoggedIn } from '../stores/auth.store';
    let email = $state("");
    let password = $state("");
    let error = $state("");
    let success = $state("");

    async function handleLogin(e: Event) {
        e.preventDefault();
        try {
            const { data } = await api.post("/auth/login", { email, password });
            localStorage.setItem("token", data.token);
            isLoggedIn.set(true);
            success = "Login successful!";
            error = "";
            console.log("Login success:", data);
            window.location.href = "/";
        } catch (err: unknown) {
            error = "Invalid email or password.";
            success = "";
            console.log(err);
        }
    }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="w-full max-w-sm bg-white shadow-xl rounded-lg p-8">
    
    <!-- Title -->
    <h1 class="text-2xl font-bold text-gray-800 text-center">Login</h1>
    <p class="text-gray-500 text-sm text-center mb-6">Welcome back! Please sign in to continue</p>

    <!-- Feedback Messages -->
    {#if error}
      <p class="text-red-500 text-sm mb-4 text-center">{error}</p>
    {/if}
    {#if success}
      <p class="text-green-600 text-sm mb-4 text-center">{success}</p>
    {/if}

    <!-- Form -->
    <form onsubmit={handleLogin} class="space-y-4">
      <input
        type="email"
        placeholder="Email"
        bind:value={email}
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />

      <input
        type="password"
        placeholder="Password"
        bind:value={password}
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Login
      </button>
    </form>

    <!-- Register Link -->
    <p class="text-sm text-gray-600 mt-6 text-center">
      Don’t have an account?
      <button onclick={() => push('/register')} class="text-blue-600 hover:underline font-medium">Register here</button>
    </p>

    <!-- Divider -->
    <div class="flex items-center my-6">
      <div class="flex-grow h-px bg-gray-300"></div>
      <span class="px-2 text-gray-400 text-sm">or</span>
      <div class="flex-grow h-px bg-gray-300"></div>
    </div>

    <!-- Google Sign-in -->
    <button
      id="googleauth"
      class="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
    >
      <img src="/src/assets/google.png" alt="Google" class="w-5 h-5"/>
      <span class="text-gray-700">Sign in with Google</span>
    </button>

  </div>
</div>
